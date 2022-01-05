const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'usa') {
    await interaction.reply('Here are some resources for you if you are going through a crisis and need immediate attention.\n \n **Mental health hotline** - (888)-635-1758\n **Eating Disorder Hotline** - (866)-624-0013\n **Domestic Violence Hotline** - (1-800)-787-3224\n **Suicide Hotline** - (800)-273-8255\n **Here is a resource with more information** - https://www.apa.org/topics/crisis-hotlines\n *Stay strong. You will get through this!*');
  }
  
  if (interaction.commandName === 'canada') {
    await interaction.reply('Here are some resources for you if you are going through a crisis and need immediate attention.\n \n **Mental health hotline** - (1-833)-456-4566\n **Eating Disorder Hotline** - (866)-528-1587\n **Domestic Violence Hotline** - (1-888)-933-9007\n **Suicide Hotline** - (800)-273-8255\n **Here is a resource with more information** - https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html\n *Stay strong. You will get through this!*');
  }
  
  if (interaction.commandName === 'uk') {
    await interaction.reply('Here is a resource with more information - https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/\n *Stay strong. You will get through this!*');
  }

  if (interaction.commandName === 'china') {
    await interaction.reply('Here is a resource with more information - https://pubmed.ncbi.nlm.nih.gov/8720517/\n *Stay strong. You will get through this!*');
  }

  if (interaction.commandName === 'india') {
    await interaction.reply('Here is a resource with more information - http://www.healthcollective.in/contact/helplines/\n *Stay strong. You will get through this!*');
  }
});

client.login('bot token');

