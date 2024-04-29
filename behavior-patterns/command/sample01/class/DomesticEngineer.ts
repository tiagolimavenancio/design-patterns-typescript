import { ICommand } from "../interface/ICommand";

export class DomesticEngineer implements ICommand {
  execute() {
    console.log("Take out the trash");
  }
}
