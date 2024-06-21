import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/router.js';

import bodyParser from 'body-parser';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
