import { AddCommand } from "./class/AddCommand";
import { SubtractCommand } from "./class/SubtractCommand";
import { Calculator } from "./model/Calculator";

(function main() {
  const calculator = new Calculator();

  const addCommand = new AddCommand(calculator, 5);
  const subtractCommand = new SubtractCommand(calculator, 3);

  addCommand.execute();
  subtractCommand.execute();

  subtractCommand.undo();
  addCommand.undo();
})();
