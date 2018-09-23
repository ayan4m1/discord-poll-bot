const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid Format:** `~Poll <Question>`')

  const embed = new Discord.RichEmbed()
  .setTitle("React to vote!")
  .setColor("#ff0000")
  .setDescription(`${question}`)
  .setFooter("Closes in 24 Hours!")

  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
    msg.react('👎')
    msg.react('🤷')
  })
  .catch(() => console.error('Emoji failed to react.'));

}

 
