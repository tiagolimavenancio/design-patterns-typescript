import { IVisitor } from "../interface/IVisitor";
import { Node } from "../model/Node";

export class ViewPostOrderVisitor implements IVisitor {
  visit(node: Node): void {
    if (!node) return;

    this.visit(node.getLeft());
    this.visit(node.getRight());
    console.log(node);
  }
}
