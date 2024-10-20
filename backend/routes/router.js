import express from 'express';
import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

dotenv.config();

const router = express.Router();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

router.get('/api', async (req, res) => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'regions'));
    if (snapshot.exists()) {
      res.json(snapshot.val());
    } else {
      res.status(404).send('No data available');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from Firebase');
  }
});

export default router;
