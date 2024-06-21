import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/api', async (req, res) => {
  res.send('Server is running');
});

export default router;
