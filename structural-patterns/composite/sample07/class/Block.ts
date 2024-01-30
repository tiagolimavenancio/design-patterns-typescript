import { IComponent } from "../interface/IComponent";

export class Block implements IComponent {
  private children: IComponent[] = [];

  public add(child: IComponent) {
    this.children.push(child);
  }

  public remove(child: IComponent) {
    this.children = this.children.filter((c) => c !== child);
  }

  render(): void {
    this.children.forEach((child) => child.render());
  }
}
