import { Point } from "./Point";

export class Line {
  private o: Point;
  private e: Point;

  constructor(origin: Point, end: Point) {
    this.o = origin;
    this.e = end;
  }

  move(x: number, y: number) {
    this.o.move(x, y);
    this.e.move(x, y);
  }

  rotate(angle: number) {
    this.e.rotate(angle, this.o);
  }

  toString(): string {
    return `Line from ${this.o.toString()} to ${this.e.toString()}`;
  }
}
