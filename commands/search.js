const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const imageSearch = require('../image_search');
const resultMap = require('../resultMap');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search for an image')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The search term')
				.setRequired(true)),
	
	async runSearch(input) {
		const query = interaction.options.getString('input');
	},
		
	async execute(interaction) {
		const query = interaction.options.getString('input');
		const searchResult = await imageSearch.search(query);
		const url = searchResult.currentSearch().link;
		const resultEmbed = new MessageEmbed()
			.setTitle(query)
			.setImage(url);
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
		);
		
		const response = await interaction.reply({ embeds: [resultEmbed], components: [row], fetchReply: true });
		await resultMap.set(response.id, searchResult);
		await resultMap.set('embed', resultEmbed);
	},
};