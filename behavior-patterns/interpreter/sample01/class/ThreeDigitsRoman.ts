import { RomanNumeralInterpreter } from "./RomanNumeralInterreter";

export class ThreeDigitsRoman extends RomanNumeralInterpreter {
  public one(): string {
    return "C";
  }

  public four(): string {
    return "CD";
  }

  public five(): string {
    return "D";
  }

  public nine(): string {
    return "CM";
  }

  public multiplier(): number {
    return 100;
  }
}
