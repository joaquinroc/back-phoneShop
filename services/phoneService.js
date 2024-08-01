const db = require("../models/phoneModels");
const uuid = require("uuid");

const phoneService = {
  getAllPhones: async () => {
    return db.findAll();
  },

  createPhone: async (data) => {
    try {
      const newPHone = await db.create(data);
      return newPHone;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = phoneService;
