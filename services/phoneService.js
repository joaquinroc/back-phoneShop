const db = require("../models/phoneModels");

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

  getPhonesByBrands: async () => {
    try {
      const allBrands = await db.findAll({
        attributes: ["brand"],
        distinct: true,
        group: ["brand"],
      });
      return allBrands;
    } catch (error) {
      throw error;
    }
  },

  deletePhone: async (id) => {
    try {
      const deleteItem = await db.destroy({
        where: {
          id: id,
        },
      });
      return deleteItem;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = phoneService;
