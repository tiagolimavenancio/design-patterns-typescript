import { IComponent } from "../interface/IComponent";

export class SimpleImage implements IComponent {
  constructor(private src: string) {}

  render(): void {
    console.log("Rendering image: ", this.src);
  }
}
