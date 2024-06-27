import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class TemperatureDisplay implements IObserver {
  protected readonly temperatureSubject!: ISubject;

  constructor(temperatureSubject: ISubject) {
    this.temperatureSubject = temperatureSubject;
    this.temperatureSubject.register(this);
  }

  update(temperature: number): void {
    console.log("Display: ", temperature);
  }
}
