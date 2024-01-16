import { IWindow } from "../interface/IWindow";

export class Windows implements IWindow {
  drawWindow(title: string) {
    console.log(`Drawing windows window with title ${title}`);
  }

  drawButton(title: string) {
    console.log(`Drawing windows button with title ${title}`);
  }
}
