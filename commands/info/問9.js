module.exports = {
    name: "問9",
    description: "問題9",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答9")
    }

}