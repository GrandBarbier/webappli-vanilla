const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// const img = new Image();
// img.src = 'img/DVD_video_logo.png'

// let x = 20
// let y = 20
// let moveX = 2
// let moveY = 2

const CUBE_SIZE_X = 100
const CUBE_SIZE_Y = 100

const objs = [];

//const colors = ['black','#ffba08','#faa307','#f48c06','#e85d04','#dc2f02','#d00000','#9d0208','#6a040f','#370617','#03071e']

const colors = ['#fff200', '#ffe600', '#ffda00', '#ffce00', '#ffc200', 
		  '#ffb600', '#ffa900', '#ff9d00', '#ff9100', '#ff8500',
		  '#ff7900', '#ff6d00', '#ff6100', '#ff5500', '#ff4900', 
		  '#ff3c00', '#ff3000', '#ff2400', '#ff1800', '#ff0c00',
		  '#ff0000', '#f20000', '#e60000', '#d90000', '#cc0000', 
		  '#bf0000', '#b20000', '#a60000', '#990000', '#8c0000',
		  '#800000', '#730000', '#660000', '#590000', '#4d0000', 
		  '#400000', '#330000', '#260000', '#190000', '#0d0000',
		  '#000000'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let gyroscope = new Gyroscope({frequency: 60});
let gyroValue = {
    x: 0,
    y: 0,
    z: 0
}
 gyroscope.addEventListener('reading', e => {
     gyroValue.x += gyroscope.x
     gyroValue.y += gyroscope.y
     gyroValue.z += gyroscope.z
     document.getElementById("gyro").innerHTML = Math.floor(gyroValue.x) + "<br>" + Math.floor(gyroValue.y) + "<br>" + Math.floor(gyroValue.z)
 });
gyroscope.start();


function init() {
    let r = canvas.width/2 - 10;
    let x = gyroValue.y / 2;
    let y = gyroValue.x / 2;
    for (let i = 0; i < colors.length; i++) {
        objs.push(crircleCreate(canvas.width/2 + x, canvas.height/2 + y,r,colors[i]));
        r = r/1.06;
        x = x * 1.05;
        y = y * 1.05;
    }
}


function gameloop(){

    canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

    objs.length = 0;
    console.log(objs.length);
    ctx.fillStyle = 'Black';
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
