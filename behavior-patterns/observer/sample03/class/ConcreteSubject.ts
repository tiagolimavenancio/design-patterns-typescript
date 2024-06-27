import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export class ConcreteSubject implements ISubject {
  public state: number = 0;
  private observers: IObserver[] = [];

  attach(observer: IObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log("Subject: Observer has been attached already");
      return;
    }

    console.log("Subject: Attached an observer");
    this.observers.push(observer);
  }

  detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      console.log("Subject: Nonexistent observer.");
      return;
    }

    console.log("Subject: Detached an observer.");
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
