"use strict";
const { Model } = require("sequelize");
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
  Order.init(
    {
      nameProductOrder: DataTypes.STRING,
      nameUserOrder: DataTypes.STRING,
      addressOrder: DataTypes.STRING,
      phoneNumberOrder: DataTypes.INTEGER,
      amountOrder: DataTypes.STRING,
      totalOrder: DataTypes.INTEGER,
      companyNameOrder: DataTypes.STRING,
      emailOrder: DataTypes.STRING,
      noteOrder: DataTypes.STRING,
      shippingMethodOrder: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
