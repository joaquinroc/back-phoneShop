const env = require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  env.parsed.DB_NAME,
  env.parsed.DB_USERNAME,
  env.parsed.DB_PASSWORD,
  {
    host: env.parsed.DB_HOST,
    port: env.parsed.DB_PORT,
    dialect: env.parsed.DB_DIALECT,
    // dialectOptions: {
    // ssl: {

    //require: true,
    // rejectUnauthorized: false,
    //},
    //},
    logging: false,
  }
);

module.exports = sequelize;
