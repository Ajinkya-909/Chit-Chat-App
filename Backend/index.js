import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/Auth.routes.js";
import messageRouts from "./routes/message.routes.js";
import { connectDB } from "./lib/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.io.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth/", authRouts);
app.use("/api/messages/", messageRouts);

server.listen(3000, () => {
  console.log(`Server is running on Port:${PORT}`);
  connectDB();
});
