//ball
const diameter = 20;
let ballsXLocation;
let positionY;
let moving;
let bounceCount;
let xVelocity;
let yVelocity;

//paddle
let paddlesXLocation;
let yPaddle;
let paddleWidth;
let paddleHeight;
let started;
let score;


function setup() {
  document.querySelector('button').addEventListener('click', function () {
    init();
  })
  createCanvas(300, 300);
  init();
}

function init() {
  //ball
  ballsXLocation = 100;
  positionY = 100;
  moving = true;
  bounceCount = 1;
  xVelocity = -2;
  yVelocity = 1;

  //paddle
  paddlesXLocation;
  yPaddle;
  paddleWidth = 50;
  paddleHeight = 15;
  started = false;
  score = 0;
}

function draw() {
  background(0);
  fill(255, 0, 255);
  noStroke();

  //making ball move
  if (isAtLeftHandSide() || isAtRightHandSide()) {
    xVelocity *= -1;
    bounceCount++;
  }

  if (isAtTop()) {
    yVelocity -= -1;
    bounceCount++;
  }

  if (positionY > height) {
    text('YOU LOSE', 30, 100);
    moving = false;
  }

  if (moving) {
    ballsXLocation = ballsXLocation + xVelocity;
    positionY = positionY + yVelocity;
  }
  ellipse(ballsXLocation, positionY, diameter, diameter);
  text('Bounce Count: ' + bounceCount, 30, 30);

  //when ball hits paddle
  if (isAtTopOfPaddle()) {
    if (isAtPaddleLeftHandSide()) {
      xVelocity *= -1;
      yVelocity *= -1;
      score++;
    } else if (isAtPaddleRightHandSide()) {
      yVelocity *= -1;
      score++;
    }
  }

  fill(0, 255, 255);
  noStroke;
  rect(paddlesXLocation, yPaddle, paddleWidth, paddleHeight)

  if (!started) {
    paddlesXLocation = width / 2;
    yPaddle = height - 50;
    started = true;
  }
  text('SCORE: ' + score, 30, 50);
}

function isAtTopOfPaddle() {
  return ((positionY + (diameter / 2)) >= yPaddle);
}

function isAtPaddleLeftHandSide() {
  return ((ballsXLocation > paddlesXLocation) && (ballsXLocation < (paddlesXLocation + (paddleWidth / 2))));
}

function isAtPaddleRightHandSide() {
  return ((ballsXLocation > paddlesXLocation + (paddleWidth / 2)) && (ballsXLocation < (paddlesXLocation + paddleWidth)));
}

function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddlesXLocation -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    paddlesXLocation += 50;
    // } else if (keyCode === UP_ARROW) {
    //   yPaddle -= 50;
    // } else if (keyCode === DOWN_ARROW) {
    // yPaddle += 50;
  }
}

function isAtRightHandSide() {
  return (ballsXLocation > (width - diameter / 2));
}

function isAtLeftHandSide() {
  return (ballsXLocation < (0 + diameter / 2));
}

function isAtBottom() {
  return (positionY > (height - diameter / 2));
}

function isAtTop() {
  return (positionY < (0 + diameter / 2));
}



