const express = require('express');
const mongoose = require('mongoose');
const empSchema = require('../schema/employeeSchema');
const contentSchema = require('../schema/tableContentSchema');


const User = new mongoose.model('User', empSchema);
const employeeContent = new mongoose.model('content', contentSchema);

const contentRouter = express.Router();
const employeeRouter = express.Router();
const employeeInfoRouter = express.Router();

contentRouter.post("/emp_content", (req, res) => {
    try {
        const data = req.body;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
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