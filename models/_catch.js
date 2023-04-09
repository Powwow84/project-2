'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class _catch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models._catch.belongsTo(models.user, {foreignKey: 'userId'})
      models._catch.belongsTo(models.fish, {foreignKey: 'fishId'})
    }
  }
  _catch.init({
    userId: DataTypes.INTEGER,
    fishId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    catch_name: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: '_catch',
  });
  return _catch;
};