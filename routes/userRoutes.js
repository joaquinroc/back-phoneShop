const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/user", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

module.exports = router;
