var ballX = 0, ballX2=0, ballX3=0;
var ballY = 0, ballY2=0, ballY3=0;
var ballSpeedX=4,  ballSpeedY=5;
var ballSpeedX2=7, ballSpeedY2=6;
var ballSpeedX3=8, ballSpeedY3=9;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(ballX, 100, 50);
  ellipse(100, ballY, 50);
  
  ellipse(ballX2, 200, 50);
  ellipse(200, ballY2, 50);

  ellipse(ballX3, 300, 50);
  ellipse(300, ballY3, 50);
  

  ballX = ballX + ballSpeedX+random(ballSpeedX);
  ballY = ballY + ballSpeedY+random(ballSpeedY);
  
  ballX2 = ballX2 + ballSpeedX2+random(ballSpeedX2);
  ballY2 = ballY2 + ballSpeedY2+random(ballSpeedY2);  
  
  ballX3 = ballX3 + ballSpeedX3+random(ballSpeedX3);
  ballY3 = ballY3 + ballSpeedY3+random(ballSpeedY3);  
  
  if (ballX > width) {
    ballSpeedX = -ballSpeedX;
  }
  
  if (ballX2 > width) {
    ballSpeedX2 = -ballSpeedX2;
  }
  
  if (ballX3 > width) {
    ballSpeedX3 = -ballSpeedX3;
  }
  
  if (ballY > height) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY2 > height) {
    ballSpeedY2 = -ballSpeedY2;
  }
  
  if (ballY3 > height) {
    ballSpeedY3 = -ballSpeedY3;
  }  
  
  
  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  
  if (ballX2 < 0) {
    ballSpeedX2 = -ballSpeedX2;
  }
  
  if (ballX3 < 0) {
    ballSpeedX3 = -ballSpeedX3;
  }  
  
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  
  if (ballY2 < 0) {
    ballSpeedY2 = -ballSpeedY2;
  }
  
  if (ballY3 < 0) {
    ballSpeedY3 = -ballSpeedY3;
  }  
}
