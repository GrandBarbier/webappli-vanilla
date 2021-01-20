const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;



// const img = new Image();
// img.src = 'img/DVD_video_logo.png'

// let x = 20
// let y = 20
// let moveX = 2
// let moveY = 2

const CUBE_SIZE_X = 100
const CUBE_SIZE_Y = 100

const objs = [];

const colors = ['#ffba08','#faa307','#f48c06','#e85d04','#dc2f02','#d00000','#9d0208','#6a040f','#370617','#03071e']

let gyroscope = new Gyroscope({frequency: 60});
gyroscope.start();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



function init() {
    let r = canvas.width/2 - 5;
    let x = gyroscope.x;
    let y = gyroscope.y;
    for (let i = 0; i < colors.length; i++) {
        objs.push(crircleCreate(canvas.width/2 + x, canvas.height/2 + y,r,colors[i]));
        r = r/1.3;
    }

}

function gameloop(){

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    init();
    objs.forEach(obj => drawCircle(obj));


    //ctx.drawImage(img, x, y, CUBE_SIZE_X, CUBE_SIZE_Y)

    // if (x+CUBE_SIZE_X >= canvas.width || x <= 0) {
    //     moveX *= -1
    // }

    // if (y+CUBE_SIZE_Y >= canvas.height || y <= 0) {
    //     moveY *= -1
    // }

    // x+=moveX
    // y+=moveY

}

setInterval(gameloop, 1000 / 60)


function crircleCreate(x,y,r,color) {
    let obj = {
        x: x,
        y: y,
        r: r,
        color: color,
        draw: drawCircle
    }
    return obj
}

function drawCircle(obj){
    ctx.beginPath();
    ctx.fillStyle = obj.color;
    ctx.arc(obj.x, obj.y, obj.r,0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
