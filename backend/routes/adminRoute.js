const express = require("express");
const { addDoctor, adminLogin, allDoctors } = require("../controller/adminController");
const upload = require("../middlewares/Multar");
const e = require("express");
const authAdmin = require("../middlewares/authAdmin");

const adminRouter = express.Router();

adminRouter.post("/add-doctor",authAdmin, upload.single('image'), addDoctor); // 'file' is the name of the field in the form data (like <input type="file" name="file">), It uses our Multar configuration to save the file to disk
adminRouter.post("/login",  adminLogin); // localhost:1818/api/admin/login
adminRouter.post("/all-doctors", authAdmin, allDoctors);

module.exports = adminRouter;
