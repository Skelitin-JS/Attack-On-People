const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576


c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor(postion) {
        this.position = postion
    }

    draw() {
        c.fillStyle ='red'
        c.fillRect(this.positon.x, this.positon.y, 50, 150)
    }
}



const player = new Sprite({
    x: 0,
    y: 0
})

player.draw()

console.log(player)