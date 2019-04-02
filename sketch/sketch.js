function setup() {
  createCanvas(600, 600)
  background(255, 255, 255)
}

function draw() {
  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0);
    } else if (key == 'g') {
      fill(0, 255, 0);
    } else if (key == 'b') {
      fill(0, 0, 255);
    } else {
      fill(0)
    }
  }

  ellipse(mouseX, mouseY, 10, 10)
}


