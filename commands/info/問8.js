module.exports = {
    name: "問8",
    description: "問題8",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答8")
    }

}