const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  new SlashCommandBuilder().setName('usa').setDescription('Helpful resources for those in the USA who need immediate attention.'),
  new SlashCommandBuilder().setName('canada').setDescription('Helpful resources for those in Canada who need immediate attention.'),
  new SlashCommandBuilder().setName('uk').setDescription('Helpful resources for those in the UK who need immediate attention.'),
  new SlashCommandBuilder().setName('china').setDescription('Helpful resources for those in China who need immediate attention.'),
  new SlashCommandBuilder().setName('india').setDescription('Helpful resources for those in India who need immediate attention.'),
  
]
const rest = new REST({ version: "9" }).setToken("bot token");

(async () => {
    try {
        console.log('[Discord API] Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands("922562835123404840", "839497888861126656"),
            { body: commands },
        );
        console.log('[Discord API] Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
