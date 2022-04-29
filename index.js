// Require the necessary discord.js classes
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
// Read environment variables
const config = require('./env-var');
const token = config.getConfig().token;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Read the command files
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// Read the event files for event handling
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Run the specified command
client.on('interactionCreate', async interaction => {
	// console.log(interaction);
	try {
		if (interaction.isCommand()) {
			// Fetch the command in the Collection with that name and assign it to the variable command
			const command = client.commands.get(interaction.commandName);
			// If command does not exist, return
			if (!command) return;
			await command.execute(interaction);
		};

		if (interaction.isButton()) {
			console.log("Button pressed");
			console.log(interaction.component.customId);
			// interaction.reply({ content: 'Button pressed: ' + interaction.message.content });
			// const originalMessage = interaction.fetchReply();
			// originalMessage.deleteReply();
			// const message = interaction.message;
			// message.edit(interaction.token);
			// console.log(interaction.token);
			// // console.log(interaction.client);
			// Fetch the reply to this interaction
			interaction.fetchReply()
				.then(reply => console.log(`Replied with ${reply.content}`))
				.catch(console.error);

			return;
		}

		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});

// Login to Discord with your client's token
client.login(token);
