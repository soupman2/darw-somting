mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour="red";
radius=4;
width=4;
lastmousex = "";
lastmousey = "";
canvas.addEventListener("mousedown", mmd)

function mmd(e) {
    colour = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    radius = document.getElementById("rad").value;
    mouseEvent = "MD";
}

canvas.addEventListener("mouseup", mmu)

function mmu(e) {
    mouseEvent = "MU"
}


canvas.addEventListener("mouseleave", mml)

function mml(e) {
    mouseEvent = "ML"
}


canvas.addEventListener("mousemove", mmm)

function mmm(e) {
    currentmousex = e.clientX - canvas.offsetLeft;
    currentmousey = e.clientY - canvas.offsetTop;
    if (mouseEvent == "MD") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(currentmousex, currentmousey, radius, 0, 2 * Math.PI)
        ctx.stroke()
    }
    
}