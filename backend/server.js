const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
const adminRouter = require("./routes/adminRoute");
require('dotenv').config();


const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/admin", adminRouter); // localhost:1818/api/admin/add-doctor

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
