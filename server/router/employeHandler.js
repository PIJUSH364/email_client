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
        const data = req.body;

        // new user create
        console.log(data);
        const content = new tableContent({ DocumentNo: data.DocumentType, refNo: data.refNo, DocumentType: data.DocumentType, title: data.title, section: data.section, department: data.department, search_keyWord: data.searchkeyWord});

        
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
        const data = req.body;

        // new user create
        const newUser = new User({ eisNo: data.eisNo, employeeCode: data.empCode, password: data.password });
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
        const data = req.body;

        // find user present on database
        await User.findOne({ employeeCode: data.empCode })
            .then(response => {
                if (response.password == data.password) {
                    // finally response send
                    res.status(200).send({ message: true });
                } else {
                    console.log("no");
                    res.status(200).send({ message: false });
                }
            });
        // console.log(userInfo);

    } catch (error) {

        res.status(200).send('login failed!');
    }
})

module.exports = { contentRouter, employeeRouter, employeeInfoRouter };