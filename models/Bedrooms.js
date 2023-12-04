const { DataTypes } = require("sequelize");

const database = require("../db/conn");

const Bedrooms = database.define("Bedroomss", {
  nm_quarto: {
    type: DataTypes.STRING,
  },
});

module.exports = Bedrooms;
