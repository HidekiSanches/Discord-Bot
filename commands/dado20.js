const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d20")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado20 = (Math.floor(Math.random()*20)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado20}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}