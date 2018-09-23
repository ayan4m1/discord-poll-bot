const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  let question = args.slice(0).join(" ");

  if (args.length === 0) {
    return message.reply('**Invalid Format:** `~Poll <Question>`');
  }

  const openEmbed = new Discord.RichEmbed()
    .setTitle("React to vote!")
    .setColor("#ff0000")
    .setDescription(`${question}`)
    .setFooter("Closes in 24 Hours!");

  message.delete();
  
  message.channel.send({openEmbed})
  .then(msg => {
    let yes=null,no=null,question=null;
    msg.react('👍')
        .then(reaction => {
            yes = reaction;
        })
        .catch(console.error);

    msg.react('👎')
        .then(reaction => {
            no = reaction;
        })
        .catch(console.error);

    msg.react('❓')
        .then(reaction => {
            question = reaction;
        })
        .catch(console.error);

    setTimeout(() =>{
        const closeEmbed = new Discord.RichEmbed()
          .setTitle("Poll Closed!")
          .setColor("#00ff00")
          .setDescription(`Results: 👍 ${yes.count-1}, 👎 ${no.count-1}, ❓ ${question.count-1}`);

        message.channel.send({closeEmbed});
    }, 8.64e7);
  })
  .catch(() => console.error('Emoji failed to react.'));
}
