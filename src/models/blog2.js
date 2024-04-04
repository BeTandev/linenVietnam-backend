"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog2.init(
    {
      secondImage: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Blog2",
    }
  );
  return Blog2;
};
