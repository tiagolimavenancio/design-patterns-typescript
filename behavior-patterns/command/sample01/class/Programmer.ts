import { ICommand } from "../interface/ICommand";

export class Programmer implements ICommand {
  execute() {
    console.log("Sell the bugs, charge extra for the fixes");
  }
}
