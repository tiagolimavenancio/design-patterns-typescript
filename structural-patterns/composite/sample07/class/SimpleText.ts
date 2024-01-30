import { IComponent } from "../interface/IComponent";

export class SimpleText implements IComponent {
  constructor(private text: string) {}

  render(): void {
    console.log("Rendering Text: ", this.text);
  }
}
