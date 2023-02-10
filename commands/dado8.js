const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d8")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado8 = (Math.floor(Math.random()*8)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado8}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}