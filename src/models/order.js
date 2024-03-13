'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    nameproductorder: DataTypes.STRING,
    nameuserOrder: DataTypes.STRING,
    addressorder: DataTypes.STRING,
    phonenumberOrder: DataTypes.INTEGER,
    totalOrder: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};