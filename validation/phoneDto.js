const Joi = require("joi");

const createPhoneSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
});

module.exports = {
  createPhoneSchema,
};
