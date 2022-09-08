const Canvas = require("canvas")
const Discord = require("discord.js")

const background = "https://i.imgur.com/zDoOVqt.png"

const dim = {
    height: 638,
    width: 1024,
    margin: 50
}

const av = {
    size: 256,
    x: 385,
    y: 155
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw in the background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    //draw white tinted box
    ctx.fillStyle = "rgba(254,254,254,0.5)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + 256 / 2, av.y + 256 / 2, av.size / 2.5, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    //write in text
    ctx.fillStyle = "rgb(179, 150, 216)"
    ctx.textAlign = "center"

    //draw in Welcome
    ctx.font = "44px Sans"
    ctx.fillText("旅途辛苦了", dim.width / 2, dim.margin + 70)

    //draw in the username
    ctx.font = "20px Arial"
    ctx.fillText(username + "#" + discrim, dim.width / 2, dim.height - dim.margin - 110)

    //draw in to the server
    ctx.font = "30px Sans"
    ctx.fillText("請耐心等候管理員接待", dim.width / 2, dim.height - dim.margin - 40)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage