const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

var img = ['https://i.pinimg.com/originals/2d/89/27/2d89277831e71d284d538c414185546e.jpg','https://pbs.twimg.com/profile_images/1250036511174688769/JalcsIch_400x400.jpg','https://i.pinimg.com/474x/c3/90/ec/c390ecd31cc902c24ba7d7ef72b38ae3.jpg','https://p.turbosquid.com/ts-thumb/24/eYK8hu/uf/capybarafurriggedc4dmodel000/jpg/1661743987/300x300/sharp_fit_q85/69eb3cb5a27c1f7d5c29d1e2d834a83e770e43da/capybarafurriggedc4dmodel000.jpg','https://conteudo.imguol.com.br/c/entretenimento/d0/2022/05/04/capivaras-no-rio-pinheiros-1651690002165_v2_300x300.jpg']


module.exports = {
    data: new SlashCommandBuilder()
    .setName("capivara")
    .setDescription("answer with image"),

    async execute(interaction) {
        var sorteio = Math.floor(Math.random()*6)

        const exampleEmbed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle("Capivara")
            .setImage(img[sorteio])

        if (!interaction.isChatInputCommand()) return;
        
        const message = await interaction.reply({ embeds: [exampleEmbed], fetchReply: true  })
        message.react('❤️');
    }

}