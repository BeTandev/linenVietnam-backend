"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmailUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailUser.init(
    {
      emailOfUser: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EmailUser",
    }
  );
  return EmailUser;
};
