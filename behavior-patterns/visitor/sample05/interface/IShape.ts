import { IVisitor } from "./IVisitor";

export interface IShape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: IVisitor): string;
}
