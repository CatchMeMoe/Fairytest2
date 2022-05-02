module.exports = {
    name: "問3",
    description: "問題3",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        message.reply("答3")
    }

}