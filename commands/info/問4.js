module.exports = {
    name: "問4",
    description: "問題4",
    category: "info",
    permissions: [],
    devOnly: false,  //if true, only the owner can run this command
    run: async ({client, message, args}) => {
        const QandAchannel = client.channels.cache.get('971047482555514910');
        QandAchannel.send ({ content: "答4",
        })
    }

}