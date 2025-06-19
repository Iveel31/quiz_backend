import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iveelturu:iveel0131@iveel.embu1nk.mongodb.net/"
    );
    console.log("All Database Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};
connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000/");
});
