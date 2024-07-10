import { IDrawable } from "../interface/IDrawable";
import { IVisitor } from "../interface/IVisitor";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Triangle } from "./Triangle";

export class Drawer implements IVisitor {
  visitCircle(shape: Circle): void {
    console.log("Drawing circle", { shape });
  }

  visitSquare(shape: Square): void {
    console.log("Drawing square", { shape });
  }

  visitTriangle(shape: Triangle): void {
    console.log("Drawing triangle", { shape });
  }

  draw(shape: IDrawable) {
    shape.accept(this);
  }
}
