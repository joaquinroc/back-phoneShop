const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/userController");

userRoute.get("/", userController.getAllUsers);
userRoute.get("/:id", userController.getUserById);
userRoute.delete("/:id", userController.deleteUser);

module.exports = userRoute;
