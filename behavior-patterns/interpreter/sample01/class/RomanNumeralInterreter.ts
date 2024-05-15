import { Context } from "./Context";

export abstract class RomanNumeralInterpreter {
  public interpret(context: Context) {
    if (context.getInput().length === 0) {
      return;
    }

    // The values nine and four are the only ones that have two places Ex: IV, IX
    if (context.getInput().startsWith(this.nine())) {
      this.addValueOutput(context, 9);
      this.setTwoDigits(context);
    }

    if (context.getInput().startsWith(this.four())) {
      this.addValueOutput(context, 4);
      this.setTwoDigits(context);
    }

    if (context.getInput().startsWith(this.five())) {
      this.addValueOutput(context, 5);
      this.setOneDigit(context);
    }

    // The values of one are the only ones that repeat, e.g.: III, CCC, MMM
    while (context.getInput().startsWith(this.one())) {
      this.addValueOutput(context, 1);
      this.setOneDigit(context);
    }
  }

  public setOneDigit(context: Context) {
    context.setInput(context.getInput().substring(1));
  }

  public setTwoDigits(context: Context) {
    context.setInput(context.getInput().substring(2));
  }

  public addValueOutput(context: Context, number: number) {
    context.setOutput(context.getOutput() + number * this.multiplier());
  }

  public abstract one(): string;
  public abstract four(): string;
  public abstract five(): string;
  public abstract nine(): string;

  public abstract multiplier(): number;
}
