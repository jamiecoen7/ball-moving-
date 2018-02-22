//setup canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//set the starting point 
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
//draw the ball
function draw()	
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x+= dx;
	y+= dy;
}
//drawing the ball functions 
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD2";
	ctx.fill();
	ctx.closePath();
}

setInterval(draw,10);