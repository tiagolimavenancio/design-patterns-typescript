import { IAstVisitor } from "../interface/IAstVisitor";
import { BinaryOperationNode } from "./BinaryOperationNode";
import { NumberNode } from "./NumberNode";

export class ExpressionEvaluator implements IAstVisitor {
  visitBinaryOperation(node: BinaryOperationNode): number {
    const left = node.getLeft().accept(this);
    const right = node.getRight().accept(this);

    switch (node.getOperator()) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      case "%":
        return left % right;
      case "^":
        return Math.pow(left, right);
      default:
        throw new Error(`Unknown operator ${node.getOperator()}`);
    }
  }

  visitNumber(node: NumberNode): number {
    return node.getValue();
  }
}
