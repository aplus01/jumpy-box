import { Box } from './box.js';
import Input from './input.js';

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.floor = this.height - 300;

    new Input(this);

    this.gameObjs = [];
    this.box = new Box({ x: 50, y: this.floor }, 100, 100, this);
    this.gameObjs = [this.box];
  }

  draw(ctx) {
    ctx.fillStyle = '#00000080';
    ctx.fillRect(0, 0, this.width, this.height);
    this.gameObjs.forEach((obj) => {
      obj.draw(ctx);
    });
  }

  update(deltaTime) {
    this.gameObjs.forEach((obj) => {
      obj.update(deltaTime);
    });
  }
}
