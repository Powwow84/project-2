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
      models.fish.hasMany(models.bagged, {foreignKey: 'fishId'})
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


