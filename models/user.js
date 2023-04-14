'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.user_fish),
      models.user.hasOne(models.bucketlist, { foreignKey: 'userId' });
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_img: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};