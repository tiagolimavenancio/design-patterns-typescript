import { IMemento } from "../interface/IMemento";
import { Originator } from "./Originator";

/**
 * The Caretaker doesn't depend on the Concrete Memento class. Therefore, it
 * doesn't have access to the originator's state, stored inside the memento. It
 * works with all mementos via the base Memento interface.
 */

export class Caretaker {
  private mementos: IMemento[] = [];
  private originator: Originator;

  constructor(o: Originator) {
    this.originator = o;
  }

  public backup() {
    console.log("Caretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  public undo() {
    if (!this.mementos.length) {
      return;
    }

    const memento: IMemento = this.mementos.pop()!;

    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }

  public showHistory() {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}
