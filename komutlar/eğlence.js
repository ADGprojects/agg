const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`ADGBOT | Eğlence Komutları`, client.user.avatarURL) 
      .setDescription('**[Davet İçin](https://discord.com/oauth2/authorize?client_id=762249303733305364&scope=bot&permissions=2146958847)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`aşkımı-ölç @kullanıcı @kullanıcı`, `herkezebendençay`, `ara112`, `ara155`, `ara199`, `simit`, `stresçarkı`, `çekiç`, tkm`,  `mesajdöndür`')
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
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};