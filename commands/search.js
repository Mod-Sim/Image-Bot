const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const imageSearch = require('../image_search');
const resultMap = require('../resultMap');
require('dotenv').config();

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
		// Format the search term to replace spaces with %20 for custom search engine URL
		const cseURL = query.replaceAll(' ', '%20');
		const resultEmbed = new MessageEmbed()
			.setTitle(`Images of ${query}`)
			.setURL(`https://cse.google.com/cse?cx=${process.env.GG_CX}#gsc.q=${cseURL}`)
			.setDescription(`Result ${searchResult.currentResult + 1} of ${searchResult.resultArray.length}`)
			.addField(searchResult.currentSearch().title, searchResult.currentSearch().displayLink)
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
				new MessageButton()
					.setLabel('View Original')
					.setStyle('LINK')
					.setURL(searchResult.currentSearch().image.contextLink),
				
		);
		
		const response = await interaction.reply({ content: 'Here ya go!', embeds: [resultEmbed], components: [row], fetchReply: true });
		await resultMap.set(response.id, searchResult);
	},
};