import { CaretakerText } from "./CaretakerText";
import { MementoText } from "./MementoText";

export class Text {
  protected text: string;
  protected caretaker: CaretakerText;

  constructor() {
    this.text = "";
    this.caretaker = new CaretakerText();
  }

  writeText(text: string) {
    this.caretaker.addMemento(new MementoText(text));
    this.text += text;
  }

  rollback() {
    this.text = this.caretaker.getLastMemento().getState();
  }

  readText() {
    console.log(this.text);
  }
}
