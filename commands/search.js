const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search for an image')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The search term')
				.setRequired(true)),
		
	async execute(interaction) {
		const exampleEmbed = new MessageEmbed()
			.setTitle(interaction.options.getString('input'))
			.setImage('https://www.stevens.edu/sites/stevens_edu/files/styles/home_page_carousel_item_980x551/public/Drone%20Video%20Frame%207-crop.jpg?itok=HvxaqNMP');

		await interaction.reply({ embeds: [exampleEmbed] });

	},
};