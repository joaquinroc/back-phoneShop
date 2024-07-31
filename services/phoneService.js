const db = require("../models/phoneModels");

const phoneService = {
  getAllPhones: async () => {
    return db.findAll();
  },

  createPhone: async (phone) => {},
};

module.exports = phoneService;
