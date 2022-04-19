module.exports = function () {
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

	rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
}