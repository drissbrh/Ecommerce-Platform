import dotenv from "dotenv";
import connectDB from "./config/db.js";

//data
import sneakerData from "./data/sneakers.js";
import userData from "./data/userData.js";

//models
import Sneaker from "./models/sneakerModel.js";
import User from "./models/userModel.js";
dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Sneaker.deleteMany({});
    await User.deleteMany({});
    await Sneaker.insertMany(sneakerData);
    await User.insertMany(userData);

    console.log("Data Import Success".blue.bold);

    process.exit(1);
  } catch (error) {
    console.log("Error with data import", error);
    process.exit(1);
  }
};

importData();

const destroyData = async () => {
  try {
    await Sneaker.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
