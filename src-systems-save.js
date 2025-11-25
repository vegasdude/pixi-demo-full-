const KEY = 'pixi-demo-save-v1';
export default class SaveSystem {
  static save(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch(e){}
  }
  static load() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch(e){return null;}
  }
}
