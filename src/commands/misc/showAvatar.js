const {
  Client,
  Interaction,
  EmbedBuilder,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Show the avatar of a user",
  options: [
    {
      name: "user",
      description: "Mention the user.",
      type: ApplicationCommandOptionType.Mentionable,
      required: false,
    },
  ],

  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   *
   */

  callback: async (client, interaction) => {
    const targetUserId = interaction.options.get("user")?.value;

    const targetUser = targetUserId
      ? await interaction.guild.members.fetch(targetUserId)
      : interaction.user;

    console.log(targetUser);

    const avatarEmbed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle(
        `${
          targetUser === interaction.user
            ? targetUser.username
            : targetUser.user.username
        }'s Avatar`
      )
      .setImage(targetUser.displayAvatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `Here is [${
          targetUser === interaction.user
            ? targetUser.username
            : targetUser.user.username
        }'s avatar](${targetUser.displayAvatarURL({
          dynamic: true,
          size: 512,
        })})`
      )
      .setTimestamp();

    await interaction.reply({
      content: `Here is the avatar of ${
        targetUser === interaction.user
          ? targetUser.username
          : targetUser.user.username
      }!`,
      embeds: [avatarEmbed],
    });
  },
};
