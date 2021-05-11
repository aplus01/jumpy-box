import Game from './game.js';

let canvas = document.getElementById('playfield');
canvas.width = innerWidth;
canvas.height = innerHeight;

let ctx = canvas.getContext('2d');
let game = new Game(canvas.width, canvas.height);
let lastTime = 0;

const loop = (timestamp) => {
  requestAnimationFrame(loop);
  const deltaTime = timestamp - lastTime;
  if (deltaTime < 1) return;
  lastTime = timestamp;
  game.update(deltaTime);
  game.draw(ctx);
};

requestAnimationFrame(loop);
