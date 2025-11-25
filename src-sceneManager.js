import MenuScene from './scenes/menuScene.js';
import GameScene from './scenes/gameScene.js';

export default class SceneManager {
  constructor(app) {
    this.app = app;
    this.scenes = {};
    this.current = null;
    this.register('menu', new MenuScene(this));
    this.register('game', new GameScene(this));
  }

  register(name, scene) {
    this.scenes[name] = scene;
  }

  change(name) {
    if (this.current && this.current.onExit) this.current.onExit();
    // remove all children to clear previous scene render objects
    this.app.stage.removeChildren();
    this.current = this.scenes[name];
    if (this.current && this.current.onEnter) this.current.onEnter();
  }

  start() {
    this.change('menu');
    this.app.ticker.add((dt) => {
      if (this.current && this.current.update) this.current.update(dt);
    });
  }
        }
