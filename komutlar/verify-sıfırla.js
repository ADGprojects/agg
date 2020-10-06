const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client,message,args) => {
  if(!message.member.hasPermissions("MANAGE_ROLES")) return message.channel.send(":x: Bu Komutu Kullanmak İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!")
  db.delete(`verify_${message.guild.id}`)
message.channel.send(":white_check_mark: Başarıyla Sıfırlandı!")
}
exports.help = {
  name: "verify-sıfırla"
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl: 0
}