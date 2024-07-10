import { IShape } from "../interface/IShape";
import { IVisitor } from "../interface/IVisitor";

export class Dot implements IShape {
  private id: number;
  private x: number;
  private y: number;

  constructor(id: number, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {}

  draw() {}

  accept(visitor: IVisitor) {
    return visitor.visitDot(this);
  }

  getId(): number {
    return this.id;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}
