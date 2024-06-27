import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class TemperatureDisplay implements IObserver {
  private subject: ISubject;

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation;
    weatherStation.register(this);
  }

  update(temp: number): void {
    console.log("TemperatureDisplay: I need to update my display -> " + temp);
  }
}
