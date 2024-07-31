const userService = require("../services/userService");

const userController = {
  createUser: async (req, res, next) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).send({ error: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).send({ error: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const success = await userService.deleteUser(parseInt(req.params.id));
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send({ error: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
