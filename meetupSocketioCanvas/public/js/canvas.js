var canvas = document.getElementById("myCanvas");

//2d or webgl(3d)
ctx = canvas.getContext('2d');


var interval = setInterval(
	function(){
		ctx.clearRect(0,0, canvas.width, canvas.height);
		draw();
	},

	33
);

function draw(){
	ctx.beginPath();
}