import { IWindow } from "../interface/IWindow";

export class Linux implements IWindow {
  drawWindow(title: string) {
    console.log(`Drawing linux window with title ${title}`);
  }

  drawButton(title: string) {
    console.log(`Drawing linux button with title ${title}`);
  }
}
