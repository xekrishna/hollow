const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans a member from the server",
  //devOnly: Boolean,
  //testOnly: Boolean,
  deleted: false,
  options: [
    {
      name: "targer-user",
      description: "The user to ban.",
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: "reason",
      description: "Reason to ban.",
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  callback: (client, interaction) => {
    interaction.reply(`ban`);
  },
};
