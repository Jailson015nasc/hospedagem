const { DataTypes } = require("sequelize");
const database = require("../db/conn");

const Imagem = database.define("Imagem", {
  nome: {
    type: DataTypes.STRING,
  },
  caminho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
module.exports = Imagem