const validateSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res
        .status(400)
        .json({ errors: error.details.map((detail) => detail.message) });
    } else {
      next();
    }
  };
};

module.exports = validateSchema;
