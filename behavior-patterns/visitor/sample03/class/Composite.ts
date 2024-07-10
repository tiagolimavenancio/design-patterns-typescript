import { IComponent } from "../interface/IComponent";

export class Composite implements IComponent {
  private static next: string = "a";
  private children: any[] = [];
  private letter: string = "";

  constructor() {
    this.letter = Composite.next;
    Composite.next = String.fromCharCode(Composite.next.charCodeAt(0) + 1);
  }

  add(c: IComponent) {
    this.children.push(c);
  }

  traverse(): void {
    console.log(this.letter + " ");

    for (const c of this.children) {
      c.traverse();
    }
  }
}
