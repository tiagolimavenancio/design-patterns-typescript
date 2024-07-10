import { INode } from "./INode";

export interface IAstVisitor {
  visitBinaryOperation(node: INode): number;
  visitNumber(node: INode): number;
}
