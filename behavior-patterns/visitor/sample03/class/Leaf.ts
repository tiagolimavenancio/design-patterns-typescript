import { IComponent } from "../interface/IComponent";

export class Leaf implements IComponent {
  private node: number;

  constructor(value: number) {
    this.node = value;
  }

  traverse(): void {
    console.log(this.node + " ");
  }
}
