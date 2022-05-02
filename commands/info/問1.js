module.exports = {
    name: "問1",
    description: "問題1",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答1")
    }

}