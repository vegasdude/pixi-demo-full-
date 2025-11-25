import * as PIXI from 'pixi.js';

export default class Player {
  constructor(app, container, sheetKey) {
    this.app = app;
    this.container = container;
    this.anim = null;
    this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.sprite.width = 48;
    this.sprite.height = 64;
    this.sprite.tint = 0x00ff00;
    this.container.addChild(this.sprite);

    const sheet = PIXI.Loader.shared.resources[sheetKey];
    if (sheet && sheet.spritesheet) {
      const frames = [];
      for (let i=0;i<4;i++){
        const key = `walk_${i}.png`;
        const f = sheet.spritesheet.textures[key];
        if(f) frames.push(f);
      }
      if(frames.length) {
        this.anim = new PIXI.AnimatedSprite(frames);
        this.anim.animationSpeed = 0.15;
        this.anim.play();
        this.container.addChild(this.anim);
        this.sprite.visible = false;
      }
    }
    this.speed = 180; // px/sec
  }

  update(controls, dt) {
    const speed = this.speed * (dt/60);
    let moved = false;
    if (controls.left) { this.sprite.x -= speed; moved = true; }
    if (controls.right) { this.sprite.x += speed; moved = true; }
    if (controls.up) { this.sprite.y -= speed; moved = true; }
    if (controls.down) { this.sprite.y += speed; moved = true; }
    if (this.anim) {
      this.anim.x = this.sprite.x;
      this.anim.y = this.sprite.y;
      this.anim.animationSpeed = moved ? 0.3 : 0.05;
    } else {
      this.sprite.tint = moved ? 0xff0000 : 0x00ff00;
    }
  }
        }
