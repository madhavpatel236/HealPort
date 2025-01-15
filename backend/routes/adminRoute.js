const express = require("express");
const { addDoctor } = require("../controller/adminController");
const upload = require("../middlewares/Multar");
const e = require("express");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single('image'), addDoctor); // 'file' is the name of the field in the form data (like <input type="file" name="file">), It uses our Multar configuration to save the file to disk


module.exports = adminRouter;
