const db = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authService = {
  register: async (data) => {
    try {
      const register = await db.create(data);
      return register;
    } catch (error) {
      throw error;
    }
  },

  login: async (data) => {
    const { email, password } = data;

    const findUser = await db.findOne({
      where: {
        email: email,
      },
    });

    if (!findUser.dataValues) {
      return res.status(400).json({ menssage: "El usuario no existe" });
    }

    // const isMatch = await bcrypt.compare(password, findUser.password);
    // if (!isMatch) {
    //     return res.status(400).json({ message: "Contraseña incorrecta" });
    // }

    const token = jwt.sign(
      { id: findUser.dataValues.id, username: findUser.dataValues.username },
      "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    return token;
  },
};

module.exports = authService;
