import { IVisitor } from "../interface/IVisitor";
import { Dot } from "./Dot";

export class Circle extends Dot {
  private radius: number;

  constructor(id: number, x: number, y: number, radius: number) {
    super(id, x, y);
    this.radius = radius;
  }

  accept(visitor: IVisitor): string {
    return visitor.visitCircle(this);
  }

  getRadius(): number {
    return this.radius;
  }
}
