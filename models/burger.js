// var orm = require("../config/orm.js");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });
  return Burger;
};


