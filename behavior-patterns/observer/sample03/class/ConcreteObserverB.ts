import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";
import { ConcreteSubject } from "./ConcreteSubject";

export class ConcreteObserverB implements IObserver {
  update(subject: ISubject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
