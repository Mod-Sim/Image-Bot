const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingify')
		.setDescription('What could this do?'),
	async execute(interaction) {
		await interaction.reply('Poke! 🤗');
	},
};