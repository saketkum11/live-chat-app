import { app } from "./app.js";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import express from "express";
dotenv.config({
  path: "./.env",
});
app.use(express.static("../client"));
const server = app.listen(process.env.PORT, () => {
  console.log(`server listening to ${process.env.PORT}`);
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  console.log("line 12 ws", ws);
  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send("hello buddy");
  });
});
