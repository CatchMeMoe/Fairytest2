const Canvas = require("canvas")
const Discord = require("discord.js")

const background = "https://i.imgur.com/y1R3COO.png"

const dim = {
    height: 480,
    width: 753,
    margin: 50
}

const generateQ1Image = async (message) => {
    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)
}

module.exports = generateQ1Image
