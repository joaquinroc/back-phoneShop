const express = require("express");
const authRoute = express.Router();
const authController = require("../controller/authController");

authRoute.post("/login", authController.login);
authRoute.post("/", authController.register);

module.exports = authRoute;
