import { Editor } from "./class/Editor";
import { EditorMemento } from "./class/EditorMemento";
import { WriteCommand } from "./class/WriteCommand";

(function main() {
  const editor = new Editor();
  const command = new WriteCommand(editor);

  command.execute();

  const memento: EditorMemento = editor.save();

  command.execute();
  command.undo();

  editor.restore(memento);
})();
