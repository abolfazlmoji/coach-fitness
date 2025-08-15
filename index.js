const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Coach Fitness Bot is running! 🚀");
});

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", qr => {
  console.log("Scan this QR to connect:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp bot is ready!");
});

client.on("message", message => {
  if (message.body.toLowerCase() === "hello") {
    message.reply("Hello! 👋 I'm your fitness coach.");
  }
});

client.initialize();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
