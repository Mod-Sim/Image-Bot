const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// Read environment variables
const config = require('./env-var');
const clientId = config.getConfig().clientId;
const guildId = config.getConfig().guildId;
const token = config.getConfig().token;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

// Deploy commands to the development guild immediately
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands to guild.'))
	.catch(console.error);

// Deploy the commands globally

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands globally.'))
	.catch(console.error);
