//pinkcode
const Discord = require('discord.js')
const db = require("quick.db")
const generator = require('generate-password');
    var password = generator.generate({
        length: 5,
        numbers: true,
    })
exports.run = function(client, message, args) {
  let rol2 = db.fetch(`verify_${message.guild.id}`)
        message.author.send(password)
  message.channel.send("Lütfen Özelden Yolladığımız Şifreyi Eksiksiz Yazın! 10 saniyen var!")
  message.channel.awaitMessages(response => response.content === password, {
        max: 1,
        time: 10000,
        errors: ['time'],
      }).then((collected)=> {
  message.member.addRole(rol2)
    message.channel.send("Kaydınız Yapıldı! <a:saritik:762933389736149003> ") 
    })
let user = message.mentions.members.first()  

    
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["doğrula"],
  permLevel: 0 
};

exports.help = {
  name: 'verify', 
  description: 'Doğrulamalı Kayıt!',
  usage: 'verify'
};
