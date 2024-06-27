import { IAlarmListener } from "../interface/IAlarmListener";

export class Lighting implements IAlarmListener {
  alarm(): void {
    console.log("lights up");
  }
}
