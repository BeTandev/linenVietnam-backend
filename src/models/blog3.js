"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog3.init(
    {
      thirdImage: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Blog3",
    }
  );
  return Blog3;
};
