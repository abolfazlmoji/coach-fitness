const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ساخت کلاینت واتساپ
const client = new Client({
    authStrategy: new LocalAuth()
});

// وقتی QR کد تولید شد
client.on('qr', (qr) => {
    console.log('QR Code دریافت شد، با گوشی اسکن کنید:');
    qrcode.generate(qr, { small: true });
});

// وقتی لاگین موفق بود
client.on('ready', () => {
    console.log('✅ ربات واتساپ آماده است!');
});

// وقتی پیام جدید اومد
client.on('message', message => {
    console.log(`📩 پیام جدید از ${message.from}: ${message.body}`);

    if (message.body.toLowerCase() === 'سلام') {
        message.reply('سلام! چطوری؟ 😄');
    }
});

// استارت کلاینت
client.initialize();
