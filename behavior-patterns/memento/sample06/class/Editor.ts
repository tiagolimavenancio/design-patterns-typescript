import { EditorMemento } from "./EditorMemento";

export class Editor {
  private _content: string = "";

  write(content: string) {
    this._content = content;
  }

  save(): EditorMemento {
    return new EditorMemento(this._content);
  }

  restore(memento: EditorMemento) {
    this._content = memento.getContent();
  }
}
