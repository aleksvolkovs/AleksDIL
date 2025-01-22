let bird;
let pipes = [];

function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background('skyblue');
	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
	
		if (pipes[i].hits(bird)) {
		  console.log("HIT");
		}
	   
		if (pipes[i].offscreen()) {
		  pipes.splice(i, 1);
		}
	  }
	
	  bird.update();
	  bird.show();

	  if (bird.y < 0 || bird.y > height) {
		console.log("You went off canvas goofy.");
		noLoop(); //ENDS GAME HERE TOO!    
	  }
	
	  if (frameCount % 75 == 0) {
		pipes.push(new Pipe());
	  }
}  

function keyPressed() {
	if (key == ' ') {
	  bird.up();
	}
  }
