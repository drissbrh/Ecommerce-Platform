import dotenv from "dotenv";
import sneakerData from "./data/sneakers.js";
import connectDB from "./config/db.js";
import sneakers from "./models/sneakers.js";
dotenv.config();

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
