import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";
import { ConcreteSubject } from "./ConcreteSubject";

export class ConcreteObserverA implements IObserver {
  update(subject: ISubject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}
