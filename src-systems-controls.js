export default class Controls {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    window.addEventListener('keydown', (e)=> this._onKey(e, true));
    window.addEventListener('keyup', (e)=> this._onKey(e, false));
  }

  _onKey(e, down) {
    const code = e.code || '';
    if (code === 'ArrowLeft' || code === 'KeyA') this.left = down;
    if (code === 'ArrowRight' || code === 'KeyD') this.right = down;
    if (code === 'ArrowUp' || code === 'KeyW') this.up = down;
    if (code === 'ArrowDown' || code === 'KeyS') this.down = down;
  }
      }
