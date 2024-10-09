const TelegramBot = require('node-telegram-bot-api'); 

const token = '7156292147:AAHXfddoJhwxkee-TSJSi9-jRa_sS6cLqYw';
const editorChatId = 167118123;
//167118123
const bot = new TelegramBot(token, { polling: true });


const welcomeMessage = `анонимный бот медиа ‘сенсуальность’. мы здесь, чтобы выслушать и поддержать.\nканал: @royal_secrets`;

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log(chatId);


    
    

        bot.sendMessage(chatId, 'что вас волнует? расскажите свою историю, фантазию или задайте вопрос сексологу.');

});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText.startsWith('/')) {
        return;
    }


    bot.sendMessage(editorChatId, `Новое анонимное сообщение от пользователя (ID: ${chatId}):\n${messageText}`);
    

    bot.sendMessage(chatId, 'спасибо, что поделились сокровенным.\nмы умеем хранить тайны и при публикации спрячем твою личность под маской белой тигрицы или нефритового дракона   \n\n_чувственные масла для контакта с собой и партнёром_\n**сайт**: [Royal Secrets](https://royal-secrets.ru/)\n**инстаграм**: [royalsecretsss](https://www.instagram.com/royalsecretsss)', { parse_mode: 'Markdown' });
});

bot.on('polling_error', (error) => {
    console.error(error);
});
