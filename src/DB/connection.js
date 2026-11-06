import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "mongodb://127.0.0.1:27017/assignment11");
    console.log("Database connected successfully");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
};
