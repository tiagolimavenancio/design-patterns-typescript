import { TextMemento } from "./TextMemento";

// Originator
export class TextEditor {
  private content: string;

  constructor() {
    this.content = "";
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  createMemento(): TextMemento {
    return new TextMemento(this.content);
  }

  restoreFromMemento(memento: TextMemento): void {
    this.content = memento.getState();
  }
}
