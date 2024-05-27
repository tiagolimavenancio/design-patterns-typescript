import { Memento } from "./Memento";

export class Caretaker {
  private mementos: Memento[] = [];

  public addMemento(m: Memento) {
    this.mementos.push(m);
  }

  public getMemento(): Memento {
    return this.mementos[this.mementos.length - 1];
  }
}
