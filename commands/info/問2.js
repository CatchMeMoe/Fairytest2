module.exports = {
    name: "問2",
    description: "問題2",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答2")
    }

}