import * as PIXI from 'pixi.js';
import Player from '../systems/player.js';
import Controls from '../systems/controls.js';
import SaveSystem from '../systems/save.js';
import { Howl } from 'howler';

export default class GameScene {
  constructor(manager) {
    this.manager = manager;
    this.app = manager.app;
    this.container = new PIXI.Container();
    this.player = null;
    this.controls = null;
    this.bgSound = null;
  }

  onEnter() {
    this.app.stage.addChild(this.container);

    const loader = new PIXI.Loader();
    loader.add('player', '/assets/player.json');
    loader.add('coin', '/assets/coin.png');
    loader.load(() => {
      this.player = new Player(this.app, this.container, 'player');
      this.controls = new Controls();
      // position player center
      this.player.sprite.x = this.app.renderer.width / 2;
      this.player.sprite.y = this.app.renderer.height / 2;

      // background sound (Howler)
      this.bgSound = new Howl({ src: ['/assets/music.ogg'], loop: true, volume: 0.5 });
      try { this.bgSound.play(); } catch(e){}

      // restore saved position (if any)
      const saved = SaveSystem.load();
      if (saved && saved.x && saved.y) {
        this.player.sprite.x = saved.x;
        this.player.sprite.y = saved.y;
      }
    });
  }

  update(dt) {
    if (!this.player || !this.controls) return;
    this.player.update(this.controls, dt);
  }

  onExit() {
    if (this.bgSound) this.bgSound.stop();
    if (this.player) SaveSystem.save({ x: this.player.sprite.x, y: this.player.sprite.y });
    this.app.stage.removeChild(this.container);
    this.container.removeChildren();
  }
  }
