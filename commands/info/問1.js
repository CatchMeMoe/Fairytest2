module.exports = {
    name: "問1",
    description: "問題1",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        const generateQ1Image = require("./generateQ1Image")
        const img = await generateQ1Image(message)
        const QandAchannel = client.channels.cache.get('971047482555514910');
    QandAchannel.send ({ content: "答1",
                         file: [img]
                    })
    }

}