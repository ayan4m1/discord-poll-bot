const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  // check for required argument
  if (args.length === 0) {
    return message.reply('**Invalid Format:** `!Poll <Question>`');
  }

  let question = args.slice(0).join(" ");

  // construct the initial poll message
  const openEmbed = new Discord.RichEmbed()
    .setTitle("React to vote!")
    .setColor("#ff0000")
    .setDescription(`${question}`)
    .setFooter("Closes in 24 Hours!");

  // delete the original trigger message
  message.delete();
  
  // display the initial poll message
  message.channel.send(openEmbed)
    .then(msg => {
      // now, react to the message with our default options
      msg.react('👍');
      msg.react('👎');
      msg.react('❓');

      // wait 24 hours
      setTimeout(() => {
          let results = "Results: ";
          let reactions = [];
          // iterate over the current map of reactions for the poll message,
          // building an array of emoji-count messages
          for (let [key, value] of msg.reactions) {
            reactions.push(`${key} ${value.count}`);
          }
          results += reactions.join(', ');

          // construct the final poll closed/results message
          const closeEmbed = new Discord.RichEmbed()
            .setTitle("Poll Closed!")
            .setColor("#00ff00")
            .setDescription(results);

          // display the poll closed/results message
          message.channel.send(closeEmbed)
            .catch(console.error);
      }, 8.64e7);
    })
    .catch(console.error);
};
