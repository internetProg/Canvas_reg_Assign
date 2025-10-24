var canvas, ctx;
//create circle constructor
function Circle(x=0, y=0, r=0, color=""){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;

    this.directionX = Math.round(Math.random()) == 0 ? -1 : 1;

    this.draw = function(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.x,
				this.y,
				this.r,
				0,
				2*Math.PI);
		ctx.stroke();
		ctx.fill();	
    }

    this.move = function(moveX=0){
		if( (this.x+this.r >= canvas.width) || (this.x-this.r <= 0) ){
			this.directionX*=-1;
		}

		this.x+=(moveX*this.directionX);
		
	}
}

//main function
function draw(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    var c = new Circle();
}