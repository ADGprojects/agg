const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Ambulansın Geliyor Dayan Kanka ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://teyit.fra1.cdn.digitaloceanspaces.com/wp-content/uploads/2019/07/444-0-911-numarali-hattin-112-acil-cagri-merkezi-ile-anlasmali-bir-acil-ambulans-agina-ait-oldugu-iddiasi.png`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ara112',
  description: 'Ambulansı Arar (ciddiye almayın)',
  usage: 'ara112'
};