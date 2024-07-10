import { IVisitor } from "../interface/IVisitor";
import { Node } from "../model/Node";

export class ViewInOrderVisitor implements IVisitor {
  visit(node: Node): void {
    if (!node) return;

    this.visit(node.getLeft());
    console.log(node);
    this.visit(node.getRight());
  }
}
