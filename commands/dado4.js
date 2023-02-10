const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d4")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado4 = (Math.floor(Math.random()*4)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado4}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}