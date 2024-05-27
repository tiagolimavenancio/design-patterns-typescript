import { IMemento } from "../interface/IMemento";

/**
 * The Concrete Memento contains the infrastructure for storing the Originator's
 * state.
 */

export class ConcreteMemento implements IMemento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  /**
   * The rest of the methods are used by the Caretaker to display metadata.
   */
  getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  getDate(): string {
    return this.date;
  }

  /**
   * The Originator uses this method when restoring its state.
   */
  getState(): string {
    return this.state;
  }
}
