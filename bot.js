const TelegramBot = require('node-telegram-bot-api');


const token = '7720985506:AAHqpNJzNuHMjMrdvJ8B_7PDSxJSR20kfN0';
const editorChatId = 1137493485;


const bot = new TelegramBot(token, { polling: true });


const welcomeMessage = 'Привет! Вы можете анонимно отправить сообщение редактору. Пожалуйста, введите текст сообщения:';


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log(chatId);
    
    bot.sendMessage(chatId, welcomeMessage);
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

        if (messageText.startsWith('/')) {
            return;
        }

        // (ID: ${chatId})
        bot.sendMessage(editorChatId, `Новое анонимное сообщение от пользователя :\n${messageText}`);
        

        bot.sendMessage(chatId, 'Ваше сообщение было отправлено анонимно.');

});


bot.on('polling_error', (error) => {
    console.error(error);
});
