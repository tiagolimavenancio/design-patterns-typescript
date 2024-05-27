import { MementoText } from "./MementoText";

export class CaretakerText {
  protected states: Array<MementoText>;

  constructor() {
    this.states = new Array<MementoText>();
  }

  addMemento(m: MementoText) {
    this.states.push(m);
  }

  getLastMemento(): MementoText {
    if (this.states.length <= 0) {
      throw new Error("There is no memento");
    }

    let lastState = this.states[this.states.length - 1];
    this.states.splice(this.states.length - 1, 1);

    return lastState;
  }
}
