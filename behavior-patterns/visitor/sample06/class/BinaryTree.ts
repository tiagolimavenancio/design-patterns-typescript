import { IVisitor } from "../interface/IVisitor";
import { Node } from "../model/Node";

export class BinaryTree {
  root: Node;
  numberOfElements: number = 0;

  constructor(idRoot: number) {
    this.root = new Node(idRoot);
  }

  insert(id: number) {
    this.insertNode(id, this.root);
  }

  remove(id: number) {}

  find(id: number) {}

  accept(visitor: IVisitor) {
    visitor.visit(this.root);
  }

  private insertNode(id: number, node: Node) {
    if (node.getId() === id) {
      return;
    }

    if (id > node.getId()) {
      if (!node.getRight()) {
        node.setRight(new Node(id));
        this.numberOfElements++;
        return;
      }
      this.insertNode(id, node.getRight());
    } else {
      if (!node.getLeft()) {
        node.setLeft(new Node(id));
        this.numberOfElements++;
        return;
      }
      this.insertNode(id, node.getLeft());
    }
  }
}
