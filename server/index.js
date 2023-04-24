const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/dbConnection");
const {
  contentRouter,
  employeeRouter,
  employeeInfoRouter,
} = require("./router/employeHandler");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// Allow cross-origin requests
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
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

// file upload ____ start

const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

app.use(
  fileUpload({
    useTempFiles: true,
  })
);


// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.post("/upload", (req, res, next) => {
  console.log(req.body);
  const file = req.files.pdfFile;
  console.log(file.tempFilePath);
  cloudinary.uploader.upload(
    file.tempFilePath,
    { pages: true },
    (err, result) => {
      const url = result.url;
      console.log("source url :", url);
      res.json({ url });
    }
  );
});

// file upload ____ end




app.listen(process.env.PORT, () =>
  console.log(`app listen port ${process.env.PORT}`)
);
