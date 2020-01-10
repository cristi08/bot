const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY1MTM4MjgyNTg1MzkxMTE1.XhhQbQ.eKMo7GBy1sNUeRVdmiZqaH4XNSc';
const PREFIX = '!'; 


const request = require('request');




bot.on('ready', () =>{
        console.log('Neata s-a trezit dulceata!');
})

bot.on('message', msg=>{
       if(msg.content ===  "mil sugi"){
        msg.reply('mars bai pula');
}
})

bot.on('message', msg=>{
        if(msg.content ===  "bv"){
         msg.reply('mil sugi');
 }
 })
 

 bot.on('message', msg=>{
        if(msg.content ===  "<:nambautnimic:659783796769685525>"){
         msg.reply('valea');
        }
}  )

bot.on('message', msg=>{
        if(msg.content === 'mm'){
                msg.reply('mars').then(msg.react('🖕'))
        }
} )

bot.on('message', msg=>{
        if(msg.content === 'rasa'){
                msg.reply('luamiai pln brate').then(msg.react('🔪'))
        }
})

client.login(process.env.NjY1MTM4MjgyNTg1MzkxMTE1.XhhQbQ.eKMo7GBy1sNUeRVdmiZqaH4XNSc);
