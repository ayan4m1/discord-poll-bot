const config = require('../config.json');

exports.run = (client) => {
    console.log(`[Poll-Bot] Bot ready in ${client.guilds.size} server(s).`);
    console.log(`[Poll-Bot] Playing with ${client.users.size} users.`);
    console.log(`[Poll-Bot] Bot Invite: https://discordapp.com/api/oauth2/authorize?client_id=${config.clientid}&permissions=26688&scope=bot`);
  }