const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingmeup')
		.setDescription('Yay it works!'),
	async execute(interaction) {
		await interaction.reply('Woohoo! 🤗');
	},
};