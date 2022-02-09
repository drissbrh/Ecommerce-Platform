require("dotenv").config({ path: "./backend/config/" });

const sneakerData = require("./data/sneakers");
const connectDB = require("./config/db");
const sneakers = require("./models/sneakers");

connectDB();

const importData = async () => {
  try {
    await sneakers.deleteMany({});

    await sneakers.insertMany(sneakerData);
    console.log("Data Import Success".blue.bold);

    process.exit(1);
  } catch (error) {
    console.log("Error with data import", error);
    process.exit(1);
  }
};

importData();
