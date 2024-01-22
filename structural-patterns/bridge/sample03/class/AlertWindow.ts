import { IWindow } from "../interface/IWindow";
import { AbstractWindow } from "./AbstractWindow";

export class AlertWindow extends AbstractWindow {
  constructor(window: IWindow) {
    super(window);
  }

  public draw(): void {
    this.drawWindow("Alert Window");

    this.drawButton("OK");
  }
}
