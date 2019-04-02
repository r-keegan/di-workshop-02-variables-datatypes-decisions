let position = 100;
let moving = true;


function setup() {
  createCanvas(400, 200)
}

function draw() {
  if(moving){
    background(100)
    position = position + 0.5
    rect(position,0,10,10)
  }
  // console.log('The position is ' + position)
  // console.log('The position is ' + moving)
}

function mousePressed() {
  console.log('mouse pressed')
  moving = !moving;
}
