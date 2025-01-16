const validator = require("validator");
const bcrypt = require("bcrypt");
// const cloudinary = require("cloudinary");
const cloudinary = require("cloudinary").v2;
const connectCloudinary = require("../config/cloudinary");
const jwt = require("jsonwebtoken");

const doctor = require("../models/doctorModel");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// need to check the duplicate email

// API for add the doctors.
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // checking for required data of the doctor present or not
    if (
      (!name,
      !email,
      !password,
      !speciality,
      !degree,
      !experience,
      !about,
      !available,
      !fees,
      !address)
    ) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // validating the email formate
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // hashing the doctor password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // uplode image to clodinary

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashPassword,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      date: Date.now(),
      address,
      image: imageUrl,
    };

    const newDoctor = new doctor(doctorData);
    await newDoctor.save();
    res.json({
      success: true,
      message: "Doctor Added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for admin login
const adminLogin = async (req, res) => {
  try {
    // Add body parser middleware check
    const body = req.body || {};
    const email = body.email;
    const password = body.password;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECREAT);
      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addDoctor, adminLogin };
