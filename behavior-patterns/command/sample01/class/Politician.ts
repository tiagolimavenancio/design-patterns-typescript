import { ICommand } from "../interface/ICommand";

export class Politician implements ICommand {
  execute() {
    console.log("Take money from the rich, take votes from the poor.");
  }
}
