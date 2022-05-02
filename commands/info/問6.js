module.exports = {
    name: "問6",
    description: "問題6",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答6")
    }

}