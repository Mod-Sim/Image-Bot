// Require the necessary discord.js classes
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
// Read environment variables
const config = require('./env-var');
const token = config.getConfig().token;
const resultMap = require('./resultMap');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

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
			const messageID = interaction.message.id;
			const A_SearchResult = await resultMap.get(messageID);
			if (interaction.customId === 'prev') {
				A_SearchResult.prevSearch();
			} else if (interaction.customId === 'next') {
				A_SearchResult.nextSearch();
			}
			const oldEmbed = interaction.message.embeds[0];
			const newEmbed = new MessageEmbed(oldEmbed)
				.setImage(await A_SearchResult.currentSearch().link);
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('prev')
						.setLabel('Previous')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setCustomId('next')
						.setLabel('Next')
						.setStyle('PRIMARY'),
					new MessageButton()
						.setLabel('View Original')
						.setStyle('LINK')
						.setURL(A_SearchResult.currentSearch().image.contextLink),

				);
			await interaction.update({ embeds: [newEmbed], components: [row], fetchReply: true });
			return;
		}

		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});

// Login to Discord with your client's token
client.login(token);
