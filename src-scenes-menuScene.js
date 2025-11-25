export default class MenuScene {
  constructor(manager){
    this.manager = manager;
  }

  onEnter(){
    // Simple DOM based menu so the sample is straightforward.
    const title = document.createElement('h1');
    title.textContent = 'Pixi Demo - Menu';
    title.style.position = 'absolute';
    title.style.left = '20px';
    title.style.top = '20px';
    title.id = 'pixi-menu-title';
    document.body.appendChild(title);

    const btn = document.createElement('button');
    btn.textContent = 'Start Game';
    btn.style.position = 'absolute';
    btn.style.left = '20px';
    btn.style.top = '80px';
    btn.id = 'pixi-start-btn';
    btn.onclick = () => this.manager.change('game');
    document.body.appendChild(btn);
  }

  onExit(){
    const t = document.getElementById('pixi-menu-title');
    const b = document.getElementById('pixi-start-btn');
    if(t) t.remove();
    if(b) b.remove();
  }
      }
