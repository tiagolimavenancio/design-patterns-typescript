import { BinaryOperationNode } from "./class/BinaryOperationNode";
import { ExpressionEvaluator } from "./class/ExpressionEvaluator";
import { NumberNode } from "./class/NumberNode";

(function main() {
  const expressionAst = new BinaryOperationNode(
    new NumberNode(2),
    "+",
    new BinaryOperationNode(new NumberNode(3), "*", new NumberNode(4))
  );

  const expressionEvaluator = new ExpressionEvaluator();
  const result = expressionAst.accept(expressionEvaluator);

  console.log({ result });
})();
