"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init(
    {
      firstImage: DataTypes.STRING,
      titleBlog: DataTypes.STRING,
      firstContent: DataTypes.STRING,
      secondContent: DataTypes.STRING,
      thirdContent: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
