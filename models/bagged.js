'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bagged extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bagged.belongsTo(models.user, {foreignKey: 'userId'})
      models.bagged.belongsTo(models.fish, {foreignKey: 'fishId'})

    }
  }
  bagged.init({
    userId: DataTypes.INTEGER,
    fishId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'bagged',
  });
  return bagged;
};