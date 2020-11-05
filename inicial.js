let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 144, 46, 1)";

ctx.fillRect(100, 50, 100, 300);

ctx.fillStyle = "rgba(217, 104, 175, 1)";

ctx.beginPath();
ctx.arc(150, 50, 50, 0, Math.PI, true);
ctx.stroke();
ctx.fill();


ctx.fillStyle = "rgba(176, 128, 118, 1)"
ctx.beginPath();
ctx.moveTo(100, 350);
ctx.lineTo(150, 400);
ctx.lineTo(200, 350);
ctx.lineTo(100, 350);
ctx.stroke();
ctx.fill();