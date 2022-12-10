const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
    // #memes channel
    if(message.channel.id === "1051012510272213044") {
      await message.react("✅");
      await message.react("❌");
      return;
    }
	}
};
