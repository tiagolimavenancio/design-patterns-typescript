import { Line } from "./Line";
import { Shape } from "../interface/Shape";

export class LineAdapter implements Shape {
  private adaptee: Line;

  constructor(line: Line) {
    this.adaptee = line;
  }

  draw(x1: number, y1: number, x2: number, y2: number): void {
    this.adaptee.draw(x1, y1, x2, y2);
  }
}
