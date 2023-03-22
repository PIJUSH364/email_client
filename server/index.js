const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDb = require('./config/dbConnection');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connect with database
connectDb();

// route

app.listen(process.env.PORT, () => console.log(`app listen port ${process.env.PORT}`))