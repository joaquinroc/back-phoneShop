const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../database/db");

const Phone = sequelize.define(
  "Phone",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
  {
    hooks: {
      beforeCreate: (phone) => {
        phone.id = uuidv4();
      },
    },
  }
);

module.exports = Phone;
