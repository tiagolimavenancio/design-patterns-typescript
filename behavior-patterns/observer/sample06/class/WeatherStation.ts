import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class WeatherStation implements ISubject {
  private temperature: number = 0;
  private observers: IObserver[] = [];

  setTemperature(temp: number): void {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notify();
  }

  register(o: IObserver): void {
    this.observers.push(o);
  }

  remove(o: IObserver): void {
    const index = this.observers.indexOf(o);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}
