module.exports = {
    name: "roll",
    description: "roll a dice",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        function rollDice() {
            return Math.floor(Math.random() * 100) + 1
        }
        message.reply("你成功擲出了" + rollDice())
    }

}