import { IAbstractExpression } from "./interface/IAbstractExpression";
import { Parser } from "./class/Parser";

(function main() {
  const SENTENCE = "5 + IV - 3 + VII - 2";
  console.log(SENTENCE);

  const AST_ROOT = Parser.parse(SENTENCE);

  console.log((AST_ROOT as IAbstractExpression).interpret());
  console.dir(AST_ROOT, { depth: null });
})();
