const Discord = require('discord.js')
const client = new Discord.Client()
client.on('Ready',()=>{console.log("봇이 준비돠었습니다.")})
client.on('message', msg=>{if(msg.content === '핑'){msg.reply('퐁!')}})
client.login('ODYwNDk3NDc2NDc2NDY5MjU4.YN8GuQ.uCcnb_6vcuc53O1tefCW3t81u8k')