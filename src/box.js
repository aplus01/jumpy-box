const MOVEMENT = {
  LEFT: 0,
  RIGHT: 1,
  JUMP: 2,
  DOWN: 3,
};

class Box {
  constructor(position, width, height, game) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.speedx = 0;
    this.speedy = 0;
    this.color = '#FF69B4';
    this.game = game;
  }

  move(direction) {
    switch (direction) {
      case MOVEMENT.LEFT:
        this.speedx -= 2;
        break;
      case MOVEMENT.RIGHT:
        this.speedx += 2;
        break;
      case MOVEMENT.JUMP:
        if (this.speedy >= 0) this.speedy -= 2;
        break;
      case MOVEMENT.DOWN:
        this.speedy += 2;
        break;
    }
  }

  update(deltaTime) {
    // set random color
    // update speed
    // update position
    this.position.x += this.speedx;
    this.position.y += this.speedy;

    if (this.position.y >= this.game.floor) {
      this.position.y = this.game.floor;
      this.speedy = 0;
    }

    if (this.position.y <= 0) {
      this.position.y = 0;
      this.speedy = -0.5;
    }

    if (this.position.x <= 0) {
      this.position.x = 0;
      this.speedx = 0;
    }
    if (this.position.x + this.width >= this.game.width) {
      this.position.x = this.game.width - this.width;
      this.speedx = 0;
    }
  }
  draw(ctx) {
    // draw rectangle
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export { Box, MOVEMENT };
