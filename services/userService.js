const db = require("../models/userModel");
const uuid = require("uuid");

const userService = {
  createUser: async (data) => {
    try {
      const newUser = await db.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userService;
