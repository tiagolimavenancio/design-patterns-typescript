import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class Fan implements IObserver {
  protected temperatureSubject!: ISubject;
  protected running: boolean = false;

  constructor(temperatureSubject: ISubject) {
    this.temperatureSubject = temperatureSubject;
    this.temperatureSubject.register(this);
  }

  update(temperature: number): void {
    console.log("Fan read temperature " + temperature);
    if (temperature < 50) {
      return this.turnOff();
    }

    return this.turnOn();
  }

  protected turnOff(): void {
    this.running = false;
    console.log("Fan is off");
  }

  protected turnOn(): void {
    this.running = true;
    console.log("Fan is on");
  }
}
