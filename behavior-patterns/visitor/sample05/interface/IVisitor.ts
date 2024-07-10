import { Circle } from "../class/Circle";
import { CompoundShape } from "../class/CompoundShape";
import { Dot } from "../class/Dot";
import { Rectangle } from "../class/Rectangle";

export interface IVisitor {
  visitDot(dot: Dot): string;
  visitCircle(circle: Circle): string;
  visitRectangle(rectangle: Rectangle): string;
  visitCompoundGraphic(cg: CompoundShape): string;
}
