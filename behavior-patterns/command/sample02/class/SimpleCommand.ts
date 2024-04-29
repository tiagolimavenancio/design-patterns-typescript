import { ICommand } from "../interface/ICommand";

export class SimpleCommand implements ICommand {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): void {
    console.log("SimpleCommand: See, I can do simple things like printing (" + this.payload + ")");
  }
}
