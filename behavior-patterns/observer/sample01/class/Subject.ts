import { Observer } from "./Observer";

export class Subject {
  private observers = new Array<Observer>();
  private state: number = 0;

  private execute() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  public add(o: Observer) {
    this.observers.push(o);
  }

  public getState(): number {
    return this.state;
  }

  public setState(value: number) {
    this.state = value;
    this.execute();
  }
}
