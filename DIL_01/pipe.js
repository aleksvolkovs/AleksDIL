class Pipe {
    constructor() {
      this.spacing = 175;
      this.top = random(height / 6, (3 / 4) * height);
      this.bottom = height - (this.top + this.spacing);
      this.x = width;
      this.w = 80;
      this.speed = 6;
    }
  
    hits(bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          noLoop(); //ENDS GAME HERE FOR LATER REFRENCE JUST IN CASE
          return true;
        }
      }
      return false;
    }
  
    show() {
        let pipeImg = loadImage('pipe.png');  
        image(pipeImg, this.x, 0, this.w, this.top);
        image(pipeImg, this.x, height - this.bottom, this.w, this.bottom);
    }
  
    update() {
      this.x -= this.speed;
    }
  
    offscreen() {
      return this.x < -this.w;
    }
  }
  