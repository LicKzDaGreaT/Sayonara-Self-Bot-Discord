//if you find something for remove the call. dm me on discord :p

const Discord = require("misakiii-discordjs")

module.exports = 
{
    id: 'exemple',
    aliases: ['exemple'],
    channels: 'any',
    exec: (call) => 
    {
        const EmbedMenu = new Discord.RichEmbed()
        .setTitle("** test **")
        .addField("**```test```**", `***test***`)
        .setFooter(`🌸 𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 | Made By Misakiii 🌸`)
        
        call.message.channel.send(EmbedMenu)
    }
};