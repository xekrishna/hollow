//For Slash Commands
require("dotenv/config");
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "avatar",
    description: "Returns the avatar of a use",
  },
  {
    name: "hey",
    description: "Replies with hey",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

const registerSlashCommands = async (commands) => {
  try {
    console.log("Registering Slash commands");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: commands,
      }
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

registerSlashCommands(commands);
