import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class Fan implements IObserver {
  private subject: ISubject;

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation;
    weatherStation.register(this);
  }

  update(temp: number): void {
    if (temp > 25) {
      console.log("Fan: It’s hot here, turning myself on...");
    } else {
      console.log("Fan: It’s nice and cool, turning myself off...");
    }
  }
}
