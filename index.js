

const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WhatsApp bot is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// --- WhatsApp Bot ---
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  console.log("WhatsApp bot is ready ✅");
});

client.on("message", (msg) => {
  if (msg.body.toLowerCase() === "hi") {
    msg.reply("Hello! 👋 I'm your fitness bot.");
  }
});

client.initialize();
