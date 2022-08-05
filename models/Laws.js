const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Laws extends Model {}

Laws.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    },
  },
   { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "laws",
  }


);

module.exports = Laws;
