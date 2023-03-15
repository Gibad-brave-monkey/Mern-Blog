import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 6666;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hngcx2r.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => {
      console.log(`Server started on host: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
