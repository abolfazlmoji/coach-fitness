const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('ربات واتساپ آماده است ✅');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'سلام') {
        await msg.reply('سلام! 👋 چطور میتونم کمکت کنم؟');
    }
});

client.initialize();
