import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();
