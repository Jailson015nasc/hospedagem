const { DataTypes } = require("sequelize");

const database = require("../db/conn");

const User = database.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },  

  cell: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = User;
