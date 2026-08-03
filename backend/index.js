import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("Missing MONGO_URI in environment variables.");
  process.exit(1);
}

const startServer = async () => {
  try {
    await mongoose.connect(mongoUri);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
/*


import mongoose,dotenv,app

dotenv.config()

const port
const mongouri

if !mongouri
  console.error
  process.exit

startServer = async

try
  await mongoose.connect(mongouri)

  app.listen(port)
    console.log
catch error
  console.error
  process.exit


*/