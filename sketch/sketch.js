const squareSize = 10
let position = 100;
let moving = true;
let amountToMovePerCycle = 3;
let count = 0;

function setup() {
  createCanvas(300, 300) 
}

function draw() {
  background(100);
  

  if ((position > (width-squareSize)) ||  position < 0) {
    amountToMovePerCycle = amountToMovePerCycle * -1;
    count++;
  }

  if (moving) {
    position = position + amountToMovePerCycle;
  }
  rect(position,0,squareSize,squareSize);
  text('The number of cycles is: ' + count, 10, 30);
} 


function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}

    // amountToMovePerCycle = -0.5;
  // } else if (position < 0) {
    // amountToMovePerCycle = 0.5;
  // }
