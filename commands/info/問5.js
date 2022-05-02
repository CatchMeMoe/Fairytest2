module.exports = {
    name: "問5",
    description: "問題5",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答5")
    }

}