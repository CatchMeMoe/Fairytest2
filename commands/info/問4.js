module.exports = {
    name: "問4",
    description: "問題4",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答4")
    }

}