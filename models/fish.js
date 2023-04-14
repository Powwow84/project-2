'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fish.hasMany(models.user_fish)
      models.fish.hasMany(models.bucketlist)
    }
  }
  fish.init({
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    wiki: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'fish',
  });
  return fish;
};


