const { Client, GatewayIntentBits, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const CLIENT_ID = "1049425397101646014";
const GUILD_ID = "983853612209950811";

const rest = new REST({ version: "10" }).setToken(
  "MTA0OTQyNTM5NzEwMTY0NjAxNA.GInWBj.D_9_mtOEfAXIjTgkPly9LaT26RNdtBwN4jRnUc"
);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.username != "stats") {
    message.reply({ content: "reply" });
  }
});

client.login(
  "MTA0OTQyNTM5NzEwMTY0NjAxNA.GInWBj.D_9_mtOEfAXIjTgkPly9LaT26RNdtBwN4jRnUc"
);

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    interaction.reply({
      content:
        "Collect your badge: https://discord.com/developers/active-developer",
    });
  }
});

async function main() {
  const commands = [
    {
      name: "badge",
      description: "you can get a badge",
    },
  ];
  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
  } catch (err) {
    console.log(err);
  }
}
main();
