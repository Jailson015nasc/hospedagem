// CONEXÃO BANCO DE DADOS LOS HOTEL
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_hotel", "root", "3709", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: console.log,
});

module.exports = sequelize;