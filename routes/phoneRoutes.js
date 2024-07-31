const express = require("express");
const phoneController = require("../controller/phoneController");
const phoneRoutes = express.Router();
const { createPhoneSchema } = require("../validation/phoneDto");
const validateSchema = require("../middleware/phone-middleware");

phoneRoutes.get("/article", phoneController.getAllPhones);
phoneRoutes.get("/article/:id", phoneController.getPhoneById);
phoneRoutes.delete("/article/:id", phoneController.deletePhone);
phoneRoutes.post(
  "/article",
  validateSchema(createPhoneSchema),
  phoneController.createPhone
);

module.exports = phoneRoutes;
