import { IAstVisitor } from "./IAstVisitor";

export interface INode {
  accept(visitor: IAstVisitor): number;
}
