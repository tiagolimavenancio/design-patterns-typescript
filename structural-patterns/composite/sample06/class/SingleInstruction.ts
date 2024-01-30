import { IInstruction } from "../interface/IInstruction";

export abstract class SingleInstruction implements IInstruction {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract execute(): boolean;
}
