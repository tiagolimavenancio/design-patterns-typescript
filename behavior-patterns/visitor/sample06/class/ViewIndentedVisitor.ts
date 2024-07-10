import { IVisitor } from "../interface/IVisitor";
import { Node } from "../model/Node";

export class ViewIndentedVisitor implements IVisitor {
  visit(node: Node): void {
    if (!node) return;

    console.log(node);
    this.visitIndented(node.getLeft(), 1);
    this.visitIndented(node.getRight(), 1);
  }

  private visitIndented(node: Node, numberOfSpaces: number) {
    if (!node) return;

    for (let i = 0; i < numberOfSpaces; i++) {
      console.log("-");
    }

    console.log(node);
    this.visitIndented(node.getLeft(), numberOfSpaces + 1);
    this.visitIndented(node.getRight(), numberOfSpaces + 1);
  }
}
