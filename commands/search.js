const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const imageSearch = require('../image_search');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search for an image')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The search term')
				.setRequired(true)),
		
	async execute(interaction) {
		const query = interaction.options.getString('input');
		const url = imageSearch.imageSearch();
		const exampleEmbed = new MessageEmbed()
			.setTitle(query)
			.setImage(url);

		await interaction.reply({ embeds: [exampleEmbed] });

	},
};