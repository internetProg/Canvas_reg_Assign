var canvas, ctx;

//Circle constructor
function Circle(x=0, y=0, r=0, color="#FFFFFF"){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.directionX = 1;

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();	
    }
}

//Cloud constructor
function Cloud(x=0, y=0){
    this.x = x;
    this.y = y;

    this.createShape = function(){
        this.circles = [];
        
        this.circles.push(new Circle(this.x - 30, this.y + 5, 40));
        this.circles.push(new Circle(this.x + 10, this.y + 10, 45));
        this.circles.push(new Circle(this.x + 50, this.y + 5, 38));
        this.circles.push(new Circle(this.x - 15, this.y - 20, 32));
        this.circles.push(new Circle(this.x + 20, this.y - 25, 35));
        this.circles.push(new Circle(this.x + 50, this.y - 30, 30));
    }
    this.createShape();  // Initialize the cloud shape

    this.drawCloud = function(){
        for(let i=0; i<this.circles.length; i++){
            this.circles[i].drawCircle();
        }
    }

    this.moveCloud = function(){
        this.x += 2;
        
        //If cloud center moves more than 80px past the right edge, 
        // reset cloud center to 80px before left edge 
        if(this.x > canvas.width + 80){
            this.x = -80;
            this.createShape();  // Reinitialize cloud at new position
        } else {
            //move all circles 2px to the right
            for(let i = 0; i < this.circles.length; i++){
                this.circles[i].x += 2;
            }
        }
    }
}   

//main function
function draw(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    var cloud = new Cloud(200, 200);
    setInterval(handleAnimation, 10, cloud);
}

//handles animation
function handleAnimation(cloud){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cloud.moveCloud();
    cloud.drawCloud();
}