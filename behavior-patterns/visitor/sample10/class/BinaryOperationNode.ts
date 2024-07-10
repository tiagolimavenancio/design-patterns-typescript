import { IAstVisitor } from "../interface/IAstVisitor";
import { INode } from "../interface/INode";

export class BinaryOperationNode implements INode {
  constructor(private left: INode, private operator: string, private right: INode) {}

  getOperator(): string {
    return this.operator;
  }

  getLeft(): INode {
    return this.left;
  }

  getRight(): INode {
    return this.right;
  }

  accept(visitor: IAstVisitor): number {
    return visitor.visitBinaryOperation(this);
  }
}
