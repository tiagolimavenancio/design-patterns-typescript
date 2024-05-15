import { IAbstractExpression } from "./interface/IAbstractExpression";
import { Add } from "./class/Add";
import { Numeral } from "./class/Numeral";
import { Subtract } from "./class/Subtract";

(function main() {
  const SENTENCE = "5 + 4 - 3 + 7 - 2";
  console.log(SENTENCE);

  const TOKENS = SENTENCE.split(" ");
  console.log(JSON.stringify(TOKENS));

  const AST: IAbstractExpression[] = [];
  AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))); // 5 + 4
  AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))); // ^ - 3
  AST.push(new Add(AST[1], new Numeral(TOKENS[6]))); // ^ + 7
  AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))); // ^ - 2

  const AST_ROOT = AST.pop();

  console.log((AST_ROOT as IAbstractExpression).interpret()); // 11
  console.dir(AST_ROOT, { depth: null });
})();
