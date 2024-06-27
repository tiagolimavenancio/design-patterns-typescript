import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class Product implements ISubject {
  private observers: IObserver[] = [];

  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const removeIndex = this.observers.indexOf(observer);

    if (removeIndex === -1) {
      this.observers.splice(removeIndex, 1);
    }
  }

  notify(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  restock(): void {
    this.notify();
  }
}
