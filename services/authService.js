const db = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authService = {
  register: async (data) => {
    const { name, email, location, password } = data;

    try {
      const hasPassword = await bcrypt.hash(password, 10);
      const register = await db.create({
        name,
        email,
        location,
        password: hasPassword,
      });
      return register;
    } catch (error) {
      throw error;
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const findUser = await db.findOne({
        where: {
          email: email,
        },
      });

      if (!findUser || !findUser.dataValues) {
        return res.status(400).json({ message: "El usuario no existe" });
      }

      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign(
        { id: findUser.dataValues.id, username: findUser.dataValues.username },
        "your_jwt_secret",
        { expiresIn: "1h" }
      );

      return token;
    } catch (error) {
      console.error("Error en la función de login:", error);
      return res.status(500).json({ message: "Error en el servidor" });
    }
  },
};

module.exports = authService;
