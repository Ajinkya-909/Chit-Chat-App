import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/Auth.routes.js";
import messageRouts from "./routes/message.routes.js";
import { connectDB } from "./lib/Database.js";
import { cookieParser } from "cookie-parser";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth/", authRouts);
app.use("/api/messages/", messageRouts);

app.listen(3000, () => {
  console.log(`Server is running on Port:${PORT}`);
  connectDB();
});
