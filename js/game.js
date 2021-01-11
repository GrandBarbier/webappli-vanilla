const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 20
let y = 20

let rectWidth = 100
let rectHeight = 100

let goUp = new Boolean ("false");
let goRight = new Boolean("true")


function gameloop(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, rectWidth, rectHeight);
    
    if (goUp) {
        y += 1
    }
    else{
        y -= 1
    }

    if (goRight) {
        x += 1
    }
    else{
        x -= 1
    }

    if (x+rectWidth >= canvas.width || x <= 0) {
        goRight = !goRight
    }

    if (y+rectHeight >= canvas.height || y <= 0) {
        goUp = !goUp
    }

}

setInterval(gameloop, 1000 / 60)