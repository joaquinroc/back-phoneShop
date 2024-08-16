const express = require("express");
const phoneController = require("../controller/phoneController");
const phoneRoutes = express.Router();
const { createPhoneSchema } = require("../validation/phoneDto");
const validateSchema = require("../middleware/phone-middleware");

phoneRoutes.get("/phone", phoneController.getAllPhones);
1;
phoneRoutes.get("/brand", phoneController.getPhonesBrands);
1;
phoneRoutes.delete("/phone/:id", phoneController.deletePhone);
phoneRoutes.get("/phone/:id", phoneController.getPhoneById);
1;
phoneRoutes.put("/phone/update", phoneController.updatePhone);
1;
phoneRoutes.post(
  "/phone",
  validateSchema(createPhoneSchema),
  phoneController.createPhone
);
1;

module.exports = phoneRoutes;
