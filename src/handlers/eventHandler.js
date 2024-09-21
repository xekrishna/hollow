const path = require("path");

const getAllFiles = require("../utils/getAllFiles");

module.exports = (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true);

  for (const eventFolder of eventFolders) {
    const eventFiles = getAllFiles(eventFolder);
    eventFiles.sort((a, b) => a > b);

    const evenName = eventFolder.replace(/\\/g, "/").split("/").pop();

    client.on(evenName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);

        await eventFunction(client, arg);
      }
    });
  }
};
