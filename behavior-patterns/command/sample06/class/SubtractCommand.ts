import { ICommand } from "../interface/ICommand";
import { Calculator } from "../model/Calculator";

export class SubtractCommand implements ICommand {
  constructor(private calculator: Calculator, private value: number) {}

  execute(): void {
    this.calculator.subtract(this.value);
  }

  undo(): void {
    this.calculator.add(this.value);
  }
}
