import { Circle } from "../class/Circle";
import { Square } from "../class/Square";
import { Triangle } from "../class/Triangle";

export interface IVisitor {
  visitCircle(shape: Circle): void;
  visitSquare(shape: Square): void;
  visitTriangle(shape: Triangle): void;
}
