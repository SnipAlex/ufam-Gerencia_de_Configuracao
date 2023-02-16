'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo_test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo_test.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo_test',
  });
  return Todo_test;
};