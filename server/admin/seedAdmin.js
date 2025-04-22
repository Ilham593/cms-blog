import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const seedAdmin = async() => {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI)
    const hashPassword = await bcrypt.hash("admin123", 10);


    const admin = new User({
      username: "admin",
      password: hashPassword,
      email: "admin123@gmail.com",
    })

    // check if admin already exists
    const existingAdmin = await User.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }
    // save admin user to database

    await admin.save();
    console.log("Admin user created successfully");
  }catch (error) {
    console.error("Error creating admin user:", error);
  }
}

seedAdmin();