// CONEXÃO BANCO DE DADOS LOS HOTEL
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_los", "root", "3709", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
