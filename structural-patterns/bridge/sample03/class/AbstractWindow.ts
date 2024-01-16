import { IWindow } from "../interface/IWindow";

export abstract class AbstractWindow {
  protected window: IWindow;

  constructor(window: IWindow) {
    this.window = window;
  }

  drawWindow(title: string) {
    this.window.drawWindow(title);
  }

  drawButton(title: string) {
    this.window.drawButton(title);
  }

  public abstract draw(): void;
}
