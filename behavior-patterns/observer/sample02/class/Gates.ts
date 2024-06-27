import { IAlarmListener } from "../interface/IAlarmListener";

export class Gates implements IAlarmListener {
  alarm(): void {
    console.log("gates close");
  }
}
