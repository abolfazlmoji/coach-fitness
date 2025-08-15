const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
const PORT = process.env.PORT || 3000;

// سرور ساده برای Render
app.get('/', (req, res) => {
  res.send('WhatsApp bot is running!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// واتساپ بات
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }
});

client.on('qr', (qr) => {
  console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
  console.log('WhatsApp bot is ready!');
});

client.on('message', (message) => {
  if (message.body.toLowerCase() === 'سلام') {
    message.reply('سلام! من ربات واتساپ هستم 😎');
  }
});

client.initialize();
