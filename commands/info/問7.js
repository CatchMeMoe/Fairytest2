module.exports = {
    name: "問7",
    description: "問題7",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答7")
    }

}