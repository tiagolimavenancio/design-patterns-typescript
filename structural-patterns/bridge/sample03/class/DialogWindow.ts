import { IWindow } from "../interface/IWindow";
import { AbstractWindow } from "./AbstractWindow";

export class DialogWindow extends AbstractWindow {
  constructor(window: IWindow) {
    super(window);
  }

  public draw(): void {
    this.drawWindow("Dialog Window");

    this.drawButton("Yes");
    this.drawButton("No");
    this.drawButton("Cancel");
  }
}
