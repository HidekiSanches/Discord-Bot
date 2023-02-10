const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d6")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado6 = (Math.floor(Math.random()*6)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado6}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}