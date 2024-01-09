import { Rectangle } from "./Rectangle";
import { Shape } from "../interface/Shape";

export class RectangleAdapter implements Shape {
  private adaptee: Rectangle;

  constructor(rectangle: Rectangle) {
    this.adaptee = rectangle;
  }

  draw(x1: number, y1: number, x2: number, y2: number): void {
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);

    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    this.adaptee.draw(x, y, width, height);
  }
}
