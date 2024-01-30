import { SingleInstruction } from "./SingleInstruction";

export class LogInstruction extends SingleInstruction {
  log: string;

  constructor(name: string, log: string) {
    super(name);
    this.log = log;
  }

  execute(): boolean {
    console.log(`${this.name}: ${this.log}`);
    return true;
  }
}
