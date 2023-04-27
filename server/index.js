const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
var bodyParser = require('body-parser');
const connectDb = require("./config/dbConnection");
const {
  contentRouter,
  employeeRouter,
  employeeInfoRouter,
} = require("./router/employeHandler");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Allow cross-origin requests
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Configuration cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});



// Put these statements before you define any routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect with database
connectDb();

// // route
app.get("/", (req, res) => res.send("app running"));

// content route
app.use("/emp", contentRouter);

// create user route
app.use("/emp", employeeRouter);

// get user route
app.use("/emp", employeeInfoRouter);

// file upload ____ start

const contentSchema = require("./schema/tableContentSchema");
const tableContent = new mongoose.model("Content", contentSchema);
// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



app.post("/upload", (req, res, next) => {
  const file = req.files.File;
  cloudinary.uploader.upload(
    file.tempFilePath,
    { pages: true },
    (err, result) => {
      if(err){
        return res.status(404).json({ msg: err.message })
      }
      if(result){const url = result.url;
        return res.status(200).json({ url: url, msg: result.message })
      }
    }
  );
});

// file upload ____ end

app.listen(process.env.PORT, () =>
  console.log(`app listen port ${process.env.PORT}`)
);

