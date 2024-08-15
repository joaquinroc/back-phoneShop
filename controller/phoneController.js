const phoneService = require("../services/phoneService");

const phoneController = {
  createPhone: async (req, res, next) => {
    const { name, brand, model, description, price, image } = req.body;
    try {
      const phone = await phoneService.createPhone({
        name,
        brand,
        model,
        description,
        price,
        image,
      });
      res.status(201).json(phone);
    } catch (error) {
      next(error);
    }
  },

  getAllPhones: async (req, res, next) => {
    try {
      const phones = await phoneService.getAllPhones();
      res.json(phones);
    } catch (error) {
      next(error);
    }
  },

  getPhoneById: async (req, res, next) => {
    try {
      const user = await phoneService.getPhoneById(parseInt(req.params.id));
      if (phone) {
        res.json(phone);
      } else {
        res.status(404).send({ error: "Phone not found" });
      }
    } catch (error) {
      next(error);
    }
  },

  getPhonesBrands: async (req, res, next) => {
    try {
      const brands = await phoneService.getPhonesByBrands();
      if (brands) {
        res.json(brands);
      } else {
        res.status(404).send({ error: "Phone not found" });
      }
    } catch (error) {
      next(error);
    }
  },

  deletePhone: async (req, res, next) => {
    try {
      const success = await phoneService.deletePhone(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send({ error: "Phone not found" });
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = phoneController;
