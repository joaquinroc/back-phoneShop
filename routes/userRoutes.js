const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/user", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
