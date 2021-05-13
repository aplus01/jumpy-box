const MOVEMENT = {
  LEFT: 0,
  RIGHT: 1,
  JUMP: 2,
  GROUND: 3,
  AIR: 4,
};

const gravity = 5;
const jumpVelocity = -27;
const maxSpeed = 7;

class Box {
  constructor(position, width, height, game) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.speedx = 0;
    this.speedy = 0;
    this.color = '#FF69B4';
    this.shift = 0;
    this.game = game;
    this.mode = MOVEMENT.GROUND;
  }

  move(direction) {
    switch (direction) {
      case MOVEMENT.LEFT:
        this.speedx = -7;
        break;
      case MOVEMENT.RIGHT:
        this.speedx = 7;
        break;
      case MOVEMENT.JUMP:
        this.jump();
        break;
      case MOVEMENT.DOWN:
        if (Math.abs(this.speedx) < maxSpeed) this.speedy += 2;
        break;
    }
  }

  jump() {
    if (this.mode === MOVEMENT.GROUND) {
      this.mode = MOVEMENT.JUMP;
      this.speedy = jumpVelocity;
    }
  }

  stop(action) {
    if (action === 'run') this.speedx = 0;
    else {
    }
  }

  update(deltaTime) {
    // set random color
    this.color = this.gradualShift(this.shift);
    this.shift += 0.01;
    // update speed
    // update position
    this.speedy = this.speedy + gravity * (1 / deltaTime);
    this.position.x += this.speedx;
    this.position.y += this.speedy;

    if (this.position.y >= this.game.floor) {
      this.position.y = this.game.floor;
      this.mode = MOVEMENT.GROUND;
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

  gradualShift(shift) {
    const r = Math.floor(Math.abs(Math.cos(shift * 0.75) * 256));
    const g = Math.floor(Math.abs(Math.sin(shift * 0.25) * 256));
    const b = Math.floor(Math.abs(Math.sin(shift * 0.5) * 256));

    return `rgb(${r},${g},${b})`;
  }

  draw(ctx) {
    // draw rectangle
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
}

export { Box, MOVEMENT };
