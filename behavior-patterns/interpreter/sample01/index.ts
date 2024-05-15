import { OneDigitRoman } from "./class/OneDigitRoman";
import { TwoDigitsRoman } from "./class/TwoDigitsRoman";
import { ThreeDigitsRoman } from "./class/ThreeDigitsRoman";
import { FourDigitsRoman } from "./class/FourDigitsRoman";
import { RomanNumeralInterpreter } from "./class/RomanNumeralInterreter";
import { Context } from "./class/Context";

(function main() {
  const interpreters = new Array<RomanNumeralInterpreter>();

  interpreters.push(new FourDigitsRoman());
  interpreters.push(new ThreeDigitsRoman());
  interpreters.push(new TwoDigitsRoman());
  interpreters.push(new OneDigitRoman());

  const numberRoman = "CXCIV";

  const context = new Context(numberRoman);

  for (const interpreter of interpreters) {
    interpreter.interpret(context);
  }

  console.log(numberRoman + " = " + context.getOutput());
})();
