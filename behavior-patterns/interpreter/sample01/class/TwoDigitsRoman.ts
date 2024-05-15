import { RomanNumeralInterpreter } from "./RomanNumeralInterreter";

export class TwoDigitsRoman extends RomanNumeralInterpreter {
  public one(): string {
    return "X";
  }

  public four(): string {
    return "XL";
  }

  public five(): string {
    return "L";
  }

  public nine(): string {
    return "XC";
  }

  public multiplier(): number {
    return 10;
  }
}
