import { RomanNumeralInterpreter } from "./RomanNumeralInterreter";

export class OneDigitRoman extends RomanNumeralInterpreter {
  public one(): string {
    return "I";
  }

  public four(): string {
    return "IV";
  }

  public five(): string {
    return "V";
  }

  public nine(): string {
    return "IX";
  }

  public multiplier(): number {
    return 1;
  }
}
