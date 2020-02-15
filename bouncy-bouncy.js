
var ballX = 0;
var ballY = 0;
var ballSpeed = 3;
var ballSpeed2 = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(ballX, 100, 50);
  ellipse(100, ballY, 50);

  ballX = ballX + ballSpeed;
  ballY = ballY + ballSpeed2;
  
  if (ballX > width) {
    ballSpeed = -ballSpeed;
  }
  
    if (ballY > height) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballX < 0) {
    ballSpeed = -ballSpeed;
  }
  
    if (ballY < 0) {
    ballSpeed2 = -ballSpeed2;
  }
}
