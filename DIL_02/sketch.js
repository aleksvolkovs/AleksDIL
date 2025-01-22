let dvd;
let x, y; 
let velocityX, velocityY; 

function setup() {
  createCanvas(500, 500); 
  dvd = loadImage('dvds.png');
  
  x = width / 2;
  y = height / 2;
  
  velocityX = random([-5, 5]);
  velocityY = random([-5, 5]);
}

function draw() {
  background('skyblue');
  image(dvd, x, y, 120, 120);

  x += velocityX;
  y += velocityY;
  

  if (x <= 0 || x + 120 >= width) {
    velocityX *= -1;
  }
  if (y <= 0 || y + 120 >= height) {
    velocityY *= -1;
  }
}


