import { Node } from "../model/Node";

export interface IVisitor {
  visit(node: Node): void;
}
