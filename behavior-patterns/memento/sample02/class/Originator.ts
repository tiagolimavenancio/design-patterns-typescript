/**
 * The Originator holds some important state that may change over time. It also
 * defines a method for saving the state inside a memento and another method for
 * restoring the state from it.
 */

import { IMemento } from "../interface/IMemento";
import { ConcreteMemento } from "./ConcreteMemento";

export class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.from({ length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join("");
  }

  /**
   * The Originator's business logic may affect its internal state. Therefore,
   * the client should backup the state before launching methods of the
   * business logic via the save() method.
   */
  public doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  /**
   * Saves the current state inside a memento.
   */
  public save(): IMemento {
    return new ConcreteMemento(this.state);
  }

  public restore(m: IMemento) {
    this.state = m.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}
