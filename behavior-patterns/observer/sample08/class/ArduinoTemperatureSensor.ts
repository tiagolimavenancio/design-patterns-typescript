import { IObserver } from "../interface/IObserver";
import { ITemperatureSensor } from "../interface/ITemperatureSensor";

export class ArduinoTemperatureSensor implements ITemperatureSensor {
  protected temperature: number = 0;
  protected observers: IObserver[] = [];

  protected setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notify();
  }

  protected setNewTemperature() {
    const randomTemperature = Math.floor(Math.random() * 120);
    console.log({ randomTemperature });
    this.setTemperature(randomTemperature);
  }

  constructor() {
    setInterval(this.setNewTemperature.bind(this), 2000);
  }

  getTemperature(): number {
    return this.temperature;
  }

  register(observer: IObserver): void {
    this.observers.push(observer);
  }

  unregister(observer: IObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.getTemperature());
    }
  }
}
