//ball
const diameter = 20;
let positionX = 100;
let positionY = 100;
let moving = true;
let bounceCount = 0;
let leftCount = 0;
let xVelocity = -2;
let yVelocity = 1;

//paddle
let xPaddle;
let yPaddle;
let paddleWidth = 100;
let paddleHeight = 25;
let started = false;


function setup() {
  createCanvas(300, 300); 
}

function draw() {
  background(0);
  fill(255, 0, 255);
  noStroke();

  //making ball move
  if (isAtLeftHandSide() ||  isAtRightHandSide()) {
    xVelocity *= -1;
    bounceCount++;
  }

  if (isAtTop() ||  isAtBottom()) {
    yVelocity *= -1;
    bounceCount++;
  }

  if (moving) {
    positionX = positionX + xVelocity;
    positionY = positionY + yVelocity;
  }
  ellipse(positionX,positionY,diameter,diameter);
  text('Bounce Count: ' + bounceCount, 30, 30);
  
  //when ball hits paddle
  if (isAtPaddleLeft() && (isAtPaddleRight())) {
    xVelocity *= -1;
    yVelocity *= -1;
  }

  fill(0, 255, 255);
  noStroke;
  rect (xPaddle, yPaddle, paddleWidth, paddleHeight)

  if (!started) {
    xPaddle = width/2;
    yPaddle = height-100;
    started = true;
  }
} 

function isAtPaddleRight() {
  return (positionY  + (diameter/2) >= yPaddle);
}

function isAtPaddleLeft() {
  return (positionX > xPaddle && positionX < xPaddle + paddleWidth);
}

function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  } else if (keyCode === UP_ARROW) {
    yPaddle -= 50;
  } else if (keyCode === DOWN_ARROW) {
    yPaddle += 50;
  }
}

function isAtRightHandSide() {
  return (positionX > (width - diameter/2));
}

function isAtLeftHandSide() {
  return (positionX < (0 + diameter/2));
}

function isAtTop() {
  return (positionY > (height - diameter/2));
}

function isAtBottom() {
  return (positionY < (0 + diameter/2));
}

