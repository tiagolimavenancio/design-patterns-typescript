import { RomanNumeralInterpreter } from "./RomanNumeralInterreter";

export class FourDigitsRoman extends RomanNumeralInterpreter {
  public one(): string {
    return "M";
  }

  public four(): string {
    return "";
  }

  public five(): string {
    return "";
  }

  public nine(): string {
    return "";
  }

  public multiplier(): number {
    return 1000;
  }
}
