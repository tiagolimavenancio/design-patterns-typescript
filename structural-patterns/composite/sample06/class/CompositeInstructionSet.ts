import { IInstruction } from "../interface/IInstruction";

export class CompositeInstructionSet implements IInstruction {
  private children: IInstruction[] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addChild(child: IInstruction) {
    this.children.push(child);
  }

  removeChild(child: IInstruction) {
    this.children = this.children.filter((c) => c.name !== child.name);
  }

  execute(): boolean {
    let successful = false;

    for (const child of this.children) {
      successful = child.execute();
    }

    return successful;
  }
}
