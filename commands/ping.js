const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('What could this do?'),
	async execute(interaction) {
		await interaction.reply('Poke! 🤗');
	},
};