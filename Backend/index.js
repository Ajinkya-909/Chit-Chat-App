import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/Auth.routes.js";
import { connectDB } from "./lib/Database.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use("/api/auth/", authRouts);

app.listen(3000, () => {
  console.log(`Server is running on Port:${PORT}`);
  connectDB();
});
