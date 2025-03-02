import express from "express";
import dotenv from "dotenv";
import authRouts from "./routes/Auth.routes.js";
import messageRouts from "./routes/message.routes.js";
import { connectDB } from "./lib/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.io.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frountend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frountend", "dist", "index.html"));
  });
}

server.listen(3000, () => {
  console.log(`Server is running on Port:${PORT}`);
  connectDB();
});
