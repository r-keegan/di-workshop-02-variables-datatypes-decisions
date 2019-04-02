const squareSize = 10;
let positionX = 100;
let positionY = 100;
let moving = true;
let count = 0;
let xVelocity = -2;
let yVelocity = 1;

function setup() {
  createCanvas(300, 300); 
}

function draw() {
  background(100);

  if (isAtLefthandSide() ||  isAtRightHandSide()) {
    xVelocity *= -1;
    count++;
  }

  if (isAtTop() ||  isAtBottom()) {
    yVelocity *= -1;
    count++;
  }

  if (moving) {
    positionX = positionX + xVelocity;
    positionY = positionY + yVelocity;
  }
  rect(positionX,positionY,squareSize,squareSize);
  text('Bounce Count: ' + count, 30, 30);
} 

function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}

function isAtLefthandSide() {
  return (positionX > (width - squareSize));
}

function isAtRightHandSide() {
  return positionX < 0;
}

function isAtTop() {
  return (positionY > (height - squareSize));
}

function isAtBottom() {
  return positionY < 0;
}

