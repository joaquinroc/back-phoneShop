const express = require("express");
const phoneController = require("../controller/phoneController");
const phoneRoutes = express.Router();
const { createPhoneSchema } = require("../validation/phoneDto");
const validateSchema = require("../middleware/phone-middleware");

phoneRoutes.get("/phone", phoneController.getAllPhones);
phoneRoutes.get("/brand", phoneController.getPhonesBrands);
phoneRoutes.delete(
  "/phone/:id",
  (req, res, next) => {
    console.log("entry..");
  },
  phoneController.deletePhone
);
phoneRoutes.get("/phone/:id", phoneController.getPhoneById);

phoneRoutes.post(
  "/phone",
  validateSchema(createPhoneSchema),
  phoneController.createPhone
);

module.exports = phoneRoutes;
