const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d100")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado100 = (Math.floor(Math.random()*100)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado100}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}