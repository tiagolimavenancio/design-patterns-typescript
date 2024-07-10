import { IAstVisitor } from "../interface/IAstVisitor";
import { INode } from "../interface/INode";

export class NumberNode implements INode {
  constructor(private value: number) {}

  getValue(): number {
    return this.value;
  }

  accept(visitor: IAstVisitor): number {
    return visitor.visitNumber(this);
  }
}
