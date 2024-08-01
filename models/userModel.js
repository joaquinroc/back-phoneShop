const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../database/db");

const User = sequelize.define(
  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.id = uuidv4();
      },
    },
  }
);

module.exports = User;
