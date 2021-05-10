let canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "red";

canvas.width=window.innerWidth
canvas.height=window.innerHeight
canvas.style.border="1px solid black";

function changebgcolor(){
    var bgcolor = document.getElementById('bgcolor').value;
    canvas.style.background=bgcolor
}

function changecolor(){
    var color = document.getElementById('color').value;
    canvas.style.color=color;
}

// main functions
var painting = false;
function startPosition(){
    painting = true;
    // ctx.beginPath();
}

function finishedPosition(){
    painting = false;
    ctx.beginPath();
}

// event listeners
canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', finishedPosition)
canvas.addEventListener('mousemove', (e)=>{
    if(!painting) return;
    ctx.lineWidth = document.getElementById("fontsize").value;
    ctx.lineCap = "round";

    
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)
})