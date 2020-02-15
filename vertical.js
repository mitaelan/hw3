var ballY = 0;
var ballSpeed2 = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
 
  ellipse(100, ballY, 50);

 
  ballY = ballY + ballSpeed2;
  
  
  
    if (ballY > height) {
    ballSpeed2 = -ballSpeed2;
  }
 
  
    if (ballY < 0) {
    ballSpeed2 = -ballSpeed2;
  }
}
