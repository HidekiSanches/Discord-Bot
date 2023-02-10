const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d12")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado12 = (Math.floor(Math.random()*12)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado12}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}