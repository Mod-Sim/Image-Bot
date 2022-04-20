const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search for an image')
		.addStringOption(option =>
			option.setName('input')
		.setDescription('The search term')
		.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Here\'s a picture of ' + interaction.options.getString('input') + '! 🖼');
	},
};