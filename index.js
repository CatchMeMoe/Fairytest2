const Discord = require ("discord.js");

const generateImage = require("./generateImage");

require("dotenv").config()

const client = new Discord.Client ({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MEMBERS"
    ]
});

let bot = {
    client,
    prefix: "~",
    oweners: ["806920231708393492", "336153574088376331"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

//const prefix = "~";

//client.commands = new Discord.Collection()

//client.on ("ready", () => {
//    console.log(`Logged in as ${client.user.tag}`, "wake up!");
//});

//client.on("message", message => {
//    if (!message.content.startsWith(prefix) || message.author.bot) return;

//    const args = message.content.slice(prefix.length).split(/ +/);
//    const command = args.shift().toLowerCase();

//    if (command === "ping"){ 
//        message.reply("pong!");
//    } else if (command === "fuck"){
//        message.reply("Fuck you too")
//    }
//});

const welcomeChannelId = "970662391031423056"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login (process.env.TOKEN);