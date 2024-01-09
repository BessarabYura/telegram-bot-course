const TelegramBot = require('node-telegram-bot-api');

// Вставьте свой токен полученный у BotFather
const token = '6341673392:AAG7Ue1QF61EO1DA-MQD8zy8BCZ-Q9DxOsI';
// Инициализация бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Привет! Я бот-эхо. Просто напиши мне что-нибудь, и я повторю это!');
});

// Эхо-функция: бот повторяет сообщение пользователя
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.toString();

    bot.sendMessage(chatId, `Вы написали: ${messageText}`);
});
