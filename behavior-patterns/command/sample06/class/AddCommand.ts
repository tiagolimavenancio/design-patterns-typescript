import { ICommand } from "../interface/ICommand";
import { Calculator } from "../model/Calculator";

export class AddCommand implements ICommand {
  constructor(private calculator: Calculator, private value: number) {}

  execute(): void {
    this.calculator.add(this.value);
  }

  undo(): void {
    this.calculator.subtract(this.value);
  }
}
