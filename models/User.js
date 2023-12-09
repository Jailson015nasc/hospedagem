const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const User = database.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },

  emailouCpf: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
    unique: true,
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },

  data: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },

  horaEscolhida: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  suiteEscolhida: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precoEscolhida: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});

module.exports = User;