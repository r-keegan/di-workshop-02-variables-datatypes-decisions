let position = 100;
let moving = true;
let amountToMovePerCycle = 3;

function setup() {
  createCanvas(600, 600) 
}

function draw() {
  background(000);

  if ((position > width) ||  position < 0) {
    amountToMovePerCycle = amountToMovePerCycle * -1;
  }
    // amountToMovePerCycle = -0.5;
  // } else if (position < 0) {
    // amountToMovePerCycle = 0.5;
  // }
  if (moving) {
    position = position + amountToMovePerCycle;
  }
  rect(position,0,10,10);
} 


function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}

