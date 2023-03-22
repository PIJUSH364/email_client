const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDb = require('./config/dbConnection');
const { contentRouter, employeeRouter, employeeInfoRouter } = require('./router/employeHandler');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// Allow cross-origin requests
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// connect with database
connectDb();

// route
app.get("/", (req, res) => res.send("app running"));

// content route
app.use("/emp", contentRouter);

// create user route
app.use("/emp", employeeRouter);

// get user route
app.use("/emp", employeeInfoRouter);



app.listen(process.env.PORT, () => console.log(`app listen port ${process.env.PORT}`))