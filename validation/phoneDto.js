const Joi = require("joi");

const createPhoneSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  image: Joi.string().required(),
});

module.exports = {
  createPhoneSchema,
};
