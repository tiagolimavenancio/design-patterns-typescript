import { ICommand } from "../interface/ICommand";
import { Editor } from "./Editor";
import { EditorMemento } from "./EditorMemento";

export class WriteCommand implements ICommand {
  private editor: Editor;
  private previousContent: string;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  execute() {
    this.editor.write("new content");
  }

  undo() {
    this.editor.restore(new EditorMemento(this.previousContent));
  }
}
