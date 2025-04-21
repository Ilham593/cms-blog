import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/postRoute.js";
// load environment variables from .env file
dotenv.config();

// create express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect to MongoDB pakai async await
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // exit process with failure
  }
};

// call connectDB function
connectDB();



// route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/posts", router);


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to MongoDB
