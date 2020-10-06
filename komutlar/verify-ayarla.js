const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client,message,args) => {
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Bunu Yapmak İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!")

  var rol = args[0]
db.set(`verify_${message.guild.id}`, rol)
  message.channel.send(":white_check_mark: Başarıyla Ayarlandı!")
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlvl:0
}
exports.help = {
  name: "verify-ayarla",
  description: "PinkCode Verify",
  usage: "verify-ayarla"
}