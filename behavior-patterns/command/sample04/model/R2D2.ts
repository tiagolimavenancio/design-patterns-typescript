import { Command } from "../class/Command";

export class R2D2 {
  private commands: Command[] = [];

  constructor() {}

  executeCommand(command: Command, args?: any) {
    this.commands.push(command);
    command.execute(args);
  }

  listCommands(): string {
    return this.commands.reduce((acc, curr) => acc + curr.toString() + "\n", "");
  }
}
