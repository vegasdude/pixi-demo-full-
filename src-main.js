import * as PIXI from 'pixi.js';
import SceneManager from './sceneManager.js';

const app = new PIXI.Application({ width: 800, height: 600, background: '#222222' });
document.body.appendChild(app.view);

const manager = new SceneManager(app);
manager.start();
