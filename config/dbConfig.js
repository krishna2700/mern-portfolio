require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE_URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.log(`Error Connecting to MongoDB: ${error}`);
  }
};

module.exports = connectToDB;
