const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingme')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Right back at ya!');
	},
};