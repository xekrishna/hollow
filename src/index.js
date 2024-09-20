const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
require("dotenv/config");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(` ${c.user.username} is now online`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === "hello") {
    message.reply("Hello");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("Hey!");
  }

  if (interaction.commandName === "avatar") {
    const avatarEmbed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle(`${interaction.user.username}'s Avatar`)
      .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `Here is [${
          interaction.user.username
        }'s avatar](${interaction.user.displayAvatarURL({
          dynamic: true,
          size: 512,
        })})`
      )
      .setTimestamp();
    interaction.reply({
      content: `Here is your avatar, ${interaction.user}!`,
      embeds: [avatarEmbed],
    });
  }
});

client.login(process.env.TOKEN);
