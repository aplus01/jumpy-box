import { MOVEMENT } from './box.js';

export default class Input {
  constructor(game) {
    document.addEventListener('keydown', (key) => {
      switch (key.code) {
        case 'ArrowRight':
          game.box.move(MOVEMENT.RIGHT);
          break;
        case 'ArrowLeft':
          game.box.move(MOVEMENT.LEFT);
          break;
        case 'ArrowUp':
        case 'Space':
          game.box.move(MOVEMENT.JUMP);
          break;
        case 'ArrowDown':
          game.box.move(MOVEMENT.DOWN);
      }
    });

    document.addEventListener('keyup', (key) => {
      switch (key.code) {
        case 'ArrowRight':
        case 'ArrowLeft':
          game.box.stop('run');
          break;
        case 'ArrowUp':
          game.box.stop('jump');
      }
    });
  }
}
