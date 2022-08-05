const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//score table
class ResultsPage extends Model{}

ResultsPage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'resultsPage',
  }
);

module.exports = ResultsPage;

