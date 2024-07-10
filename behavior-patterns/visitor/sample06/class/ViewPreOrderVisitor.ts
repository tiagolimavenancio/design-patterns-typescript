import { IVisitor } from "../interface/IVisitor";
import { Node } from "../model/Node";

export class ViewPreOrderVisitor implements IVisitor {
  visit(node: Node): void {
    if (!node) return;

    console.log(node);
    this.visit(node.getLeft());
    this.visit(node.getRight());
  }
}
