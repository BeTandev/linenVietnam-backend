const { Sequelize } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("linenvie660e_linenvietnam", "linenvie660e_root", "LinenVietnam2024", {
  host: "gaziantep.maychu.cloud",
  dialect: "mysql",
  logging: true
});

const connectionDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectionDatabase()