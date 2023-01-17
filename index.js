const TelegramApi = require('node-telegram-bot-api')

const token = '5950662245:AAG9R9QFxIDm1M91XCfav4Wa9rX61LXf9qs'

const bot = new TelegramApi(token, {polling: true})


bot.on('message', msg =>{
    console.log(msg)
})