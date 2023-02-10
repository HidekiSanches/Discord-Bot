const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("react")
        .setDescription("answer with capivara"),

    async execute(interaction){
        if (!interaction.isChatInputCommand()) return;

		const message = await interaction.reply({ content: 'Capivara!', fetchReply: true });
		message.react('❤️');
    }
}