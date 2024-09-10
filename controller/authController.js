const authService = require("../services/authService");

const authController = {
  register: async (req, res, next) => {
    const { name, email, location, password } = req.body;

    try {
      const userRegister = await authService.register({
        name,
        email,
        location,
        password,
      });
      res.status(201).json(userRegister);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const userLogin = await authService.login(req, res);
      res.status(201).json(userLogin);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
