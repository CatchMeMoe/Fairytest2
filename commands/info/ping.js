module.exports = {
    name: "ping",
    description: "just ping pong",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("Pong!")
    }

}