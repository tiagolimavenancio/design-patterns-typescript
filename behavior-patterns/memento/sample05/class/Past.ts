// Caretaker

import { TextMemento } from "./TextMemento";

export class Past {
  private mementos: TextMemento[] = [];

  addMemento(memento: TextMemento) {
    this.mementos.push(memento);
  }

  getMemento(index: number): TextMemento {
    return this.mementos[index];
  }
}
