const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");

const app = express();

connectDB()
  .then(() => {
    console.log("Database connection established... ");
    app.listen(1818, () => {
      console.log("server is succesfully made at port 1818");
    });
  })
  .catch((err) => {
    console.log("Some err occure when database connection establish." + err);
  });
  connectCloudinary();
