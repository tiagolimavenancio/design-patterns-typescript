import { Past } from "./class/Past";
import { TextEditor } from "./class/TextEditor";

(function main() {
  const editor = new TextEditor();
  const past = new Past();

  past.addMemento(editor.createMemento());

  editor.setContent("Hello, ");
  past.addMemento(editor.createMemento());

  editor.setContent("World!");
  past.addMemento(editor.createMemento());

  // undo
  editor.restoreFromMemento(past.getMemento(1));
  console.log(editor.getContent());

  // redo
  editor.restoreFromMemento(past.getMemento(2));
  console.log(editor.getContent());
})();
