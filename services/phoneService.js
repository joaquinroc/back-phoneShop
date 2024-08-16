const db = require("../models/phoneModels");

const phoneService = {
  getAllPhones: async () => {
    return db.findAll();
  },
  getPhoneById: async (id) => {
    try {
      const phone = await db.findOne({
        where: {
          id: id,
        },
      });
      return phone;
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

  createPhone: async (data) => {
    try {
      const newPHone = await db.create(data);
      return newPHone;
    } catch (error) {
      throw error;
    }
  },

  updatePhone: async (data) => {
    const { id, name, brand, model, price, image } = data;
    try {
      const getPhone = await db.findByPk(id);
      if (!getPhone) {
        return res
          .status(404)
          .json({ message: "No se encontró el teléfono para actualizar." });
      }

      getPhone.name = name !== undefined ? name : getPhone.name;
      getPhone.brand = brand !== undefined ? brand : getPhone.brand;
      getPhone.model = model !== undefined ? model : getPhone.model;
      getPhone.price = price !== undefined ? price : getPhone.price;
      getPhone.image = image !== undefined ? image : getPhone.image;

      await getPhone.save();

      return getPhone;
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
