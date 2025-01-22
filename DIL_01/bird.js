class Bird {
    constructor() {
      this.y = height / 2;
      this.x = 64;
  
      this.gravity = 0.1;
      this.lift = -12;
      this.velocity = 0;
    }
  
    show() {
      let birdIcon = loadImage("bird.png");
      image(birdIcon, this.x, this.y, 48, 48);
    }
  
    up() {
      this.velocity += this.lift;
    }
  
    update() {
      this.velocity += this.gravity;
      this.y += this.velocity;
  
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
  
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    }
  }
  