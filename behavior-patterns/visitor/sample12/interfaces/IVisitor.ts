import { AbstractCarPart } from "../class/AbstractCarPart";

export interface IVisitor {
  // An interface that custom Visitors should implement
  visit(part: AbstractCarPart): void;
}
