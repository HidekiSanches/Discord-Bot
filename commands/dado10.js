const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d10")
        .setDescription("answer with dice roll"),

    async execute(interaction){
        var dado10 = (Math.floor(Math.random()*10)+1)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${dado10}`)

            await interaction.reply({ embeds: [exampleEmbed]})
    }
}