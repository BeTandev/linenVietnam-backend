'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    nameProduct: DataTypes.STRING,
    detailProduct: DataTypes.STRING,
    priceProduct: DataTypes.FLOAT,
    categoryProduct: DataTypes.STRING,
    reviewProduct: DataTypes.STRING,
    tagProduct: DataTypes.STRING,
    amountProduct: DataTypes.INTEGER,
    weightProduct: DataTypes.FLOAT,
    widthProduct: DataTypes.FLOAT,
    avatarProduct: DataTypes.STRING,
    detailImgProduct: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};