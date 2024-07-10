import { IShape } from "../interface/IShape";
import { IVisitor } from "../interface/IVisitor";

export class CompoundShape implements IShape {
  private id: number;
  public children: IShape[] = [];

  constructor(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  move(x: number, y: number): void {}

  draw(): void {}

  accept(visitor: IVisitor): string {
    return visitor.visitCompoundGraphic(this);
  }

  add(shape: IShape) {
    this.children.push(shape);
  }
}
