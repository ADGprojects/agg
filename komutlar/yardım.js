const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ADG GUARD`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=762249303733305364&scope=bot&permissions=2146958847) | [ADG BOT SUPPORT](https://discord.gg/rak8tVn) | [Youtube](https://www.youtube.com/channel/UCfGtGrdClcb-0AEszmu-E-A?view_as=subscriber)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`ADG GUARD - Yardım`, `:white_small_square: | **+eğlence**: Sunucunuz için Eğlence Komutlarını Gösterir.!\n:white_small_square: | **+botkomutları**: Sunucudaki Coğu Komutları Gösterir\n:white_small_square: | **+yetkili**: Yetkili Komutlarını Gösterir!\n:white_small_square: | **+müzikkomutları**: Müzik Komutlarını Gösterir\n:white_small_square: | **+mbin**: Mo1raBin Nedir ? Pastebin Tarzı Bin Sitesidir`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
