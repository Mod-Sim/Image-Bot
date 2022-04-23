const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// Read environment variables
const config = require('./env-var');
const clientId = config.getConfig().clientId;
const guildId = config.getConfig().guildId;
const token = config.getConfig().token;
// Get arguments from command input to determine environment state
const args = process.argv.slice(2);
const env_state = args[0];

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Read development commands from commands-dev/ folder
if (env_state === 'dev') {
	const commandFilesDev = fs.readdirSync('./commands-dev').filter(file => file.endsWith('.js'));

	for (const file of commandFilesDev) {
		const command = require(`./commands-dev/${file}`);
		commands.push(command.data.toJSON());
	}
}
const numCommands = commands.length;
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${env_state} application (/) commands with ${numCommands} command(s).`);

		if (env_state === 'dev') {
			// Deploy commands to the development guild immediately
			await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },

			);
			console.log(`Successfully reloaded ${numCommands} application (/) command(s) to guild ${guildId}.`);

		} else if (env_state === 'prod') {
			// Deploy commands globally to production
			await rest.put(
				Routes.applicationCommands(clientId),
				{ body: commands },
			);
			console.log(`Successfully reloaded ${numCommands} application (/) command(s) globally.`);
		} else {
			throw new Error(`Invalid environment state: ${env_state}. Must be 'dev' or 'prod'.`);
		}
	} catch (error) {
		console.error(error);
	}
})();