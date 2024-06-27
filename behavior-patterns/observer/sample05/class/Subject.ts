import { Data } from "../model/Data";
import { Observer } from "./Observer";

export class Subject {
  protected observers: Array<Observer>;
  protected data!: Data;

  constructor() {
    this.observers = new Array<Observer>();
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(index: number) {
    this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }

  setState(data: Data) {
    this.data = data;
    this.notify();
  }

  getState(): Data {
    return this.data;
  }
}
