let blocks = [];
let blockWidth = 100;
let blockHeight = 30;
let gravity = 3;
let fallingBlock;
let blockSettled = false;

function setup() {
  createCanvas(500, 500);
  fallingBlock = createBlock(width / 2, 0);
  blocks.push(fallingBlock);
  displayMode('centered');
}

function draw() {
  background('skyblue');

  if (!blockSettled) {
    fallingBlock.position.y += gravity;

    if (fallingBlock.position.y + blockHeight / 2 >= height || isBlockTouchingOtherBlocks(fallingBlock)) {
      blockSettled = true;
    }
  }

  for (let block of blocks) {
    drawBlock(block);
  }

  if (blockSettled) {
    createNewBlock(random(-blockWidth, blockWidth));
    blockSettled = false;
  }
}

function createBlock(x, y) {
  let block = createSprite(x, y, blockWidth, blockHeight);
  block.shapeColor = color(random(255), random(255), random(255));
  return block;
}

function createNewBlock(offsetX) {
  fallingBlock = createBlock(width / 2 + offsetX, 0);
  blocks.push(fallingBlock);
}

function isBlockTouchingOtherBlocks(block) {
  for (let otherBlock of blocks) {
    if (otherBlock !== block &&
      block.position.y + blockHeight / 2 >= otherBlock.position.y - blockHeight / 2 &&
      block.position.x + blockWidth / 2 > otherBlock.position.x - blockWidth / 2 &&
      block.position.x - blockWidth / 2 < otherBlock.position.x + blockWidth / 2) {
      return true;
    }
  }
  return false;
}

function drawBlock(block) {
  fill(block.shapeColor);
  rect(block.position.x - blockWidth / 2, block.position.y - blockHeight / 2, blockWidth, blockHeight);
}
