import { IShape } from "../interface/IShape";
import { IVisitor } from "../interface/IVisitor";

export class Rectangle implements IShape {
  private id: number;
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(id: number, x: number, y: number, width: number, height: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  accept(visitor: IVisitor): string {
    return visitor.visitRectangle(this);
  }

  move(x: number, y: number): void {}

  draw(): void {}

  getId(): number {
    return this.id;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}
