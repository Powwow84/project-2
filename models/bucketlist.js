'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bucketlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bucketlist.belongsTo(models.user, {foreignKey: 'userId'})
      models.bucketlist.belongsTo(models.fish, {foreignKey: 'fishId'})
    }
  }
  bucketlist.init({
    userId: DataTypes.INTEGER,
    fishId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    img: DataTypes.TEXT,
    wiki: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'bucketlist',
  });
  return bucketlist;
};