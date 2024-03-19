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
      // Product.belongsTo(models.Category, {foreignKey: 'category_code', targetKey: 'code', as: 'Category_data'})
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
    image: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};