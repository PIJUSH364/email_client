const express = require('express');
const mongoose = require('mongoose');
const empSchema = require('../schema/employeeSchema');
const contentSchema = require('../schema/tableContentSchema');
const connectDb = require('../config/dbConnection');


const User = new mongoose.model('User', empSchema);
const tableContent = new mongoose.model('Content', contentSchema);

const contentRouter = express.Router();
const employeeRouter = express.Router();
const employeeInfoRouter = express.Router();

contentRouter.post("/emp_content", async (req, res) => {
    try {
        const { DocumentNo, refNo, DocumentType, title, section, department, search_keyWord } = req.body;
        // new user create
        const content = new tableContent({ DocumentNo, refNo, DocumentType, title, section, department, search_keyWord });
        // user save on mongodb
        await content.save();
        // finally response send
        res.status(200).send({ message: 'upload successful!' });

    } catch (error) {
        res.status(200).send({ message: 'upload failed!' });
    }
})

contentRouter.get("/emp_content", async (req, res) => {

    tableContent.find({}, { _id: 0 }).then((result) => {
        res.json(result)

    }).catch((err) => {
        res.json("something went wrong")
    });

    // res.send(collection)
})

employeeRouter.post("/sing_up", async (req, res) => {
    try {
        const { eisNo, employeeCode, password } = req.body;
        // new user create
        const newUser = new User({ eisNo, employeeCode, password });
        // user save on mongodb
        await newUser.save();
        // finally response send
        res.status(200).send({ message: 'SignUp successful!' });
    } catch (error) {
        res.status(500).send('SignUp failed!');
    }
})

employeeInfoRouter.post("/login", async (req, res) => {
    try {
        const { employeeCode, password } = req.body;
        console.log(employeeCode);
        // find user present on database
        const userInfo = await User.findOne({ employeeCode: employeeCode });
        if (userInfo.password === password) {
            res.status(200).send(true);
        } else {
            res.status(200).send(false);
        }
    } catch (error) {
        res.status(200).send('login failed!');
    }
})

module.exports = { contentRouter, employeeRouter, employeeInfoRouter };