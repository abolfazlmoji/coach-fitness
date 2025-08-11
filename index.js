const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('ربات آماده است ✅');
});

client.on('message', message => {
    if (message.body.toLowerCase().includes('سلام')) {
        message.reply('سلام 👋 خوش آمدید! لطفا سن، وزن و قد خود را ارسال کنید.');
    } else if (message.body.match(/^\d{2}.*\d{2,3}.*\d{3}$/)) {
        message.reply('آیا سابقه شکستگی یا آسیب یا ناهنجاری جسمانی دارید؟');
    } else if (message.body.includes('بله') || message.body.includes('خیر')) {
        message.reply('این اولین برنامه شماست یا برنامه چندمه؟');
    } else if (message.body.includes('اولین') || message.body.includes('چندم')) {
        message.reply('لطفا پس از پرداخت هزینه اسکرین‌شات پرداخت را ارسال کنید 💳');
    }
});

client.initialize();
