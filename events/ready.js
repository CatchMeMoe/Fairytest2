module.exports = {
    name: "ready",
    description: "Bot ready to work",
    run: async (bot) => {
        console.log(bot.client.user.tag + "小仙子起床，工作時間到了！！")
    }
}