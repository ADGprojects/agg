const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`ADGBOT | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Davet İçin](https://discord.com/oauth2/authorize?client_id=761466183425327147&scope=bot&permissions=2146958847)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`ailemiz`, `davet`, `emojiyazı`, `havadurumu`, `emojiler`, `istatistik`, `stresçarkı`, `çekiç`, tkm`,  `mesajdöndür`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'botkomutları',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};