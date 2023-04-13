'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_fish.belongsTo(models.user),
      models.user_fish.belongsTo(models.fish)
    }
  }
  user_fish.init({
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
    modelName: 'user_fish',
  });
  return user_fish;
};