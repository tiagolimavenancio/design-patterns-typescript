import { IAlarmListener } from "../interface/IAlarmListener";

export class SensorSystem {
  private listeners: any[] = [];

  public register(a: IAlarmListener) {
    this.listeners.push(a);
  }

  public soundTheAlarm() {
    for (const e of this.listeners) {
      e.alarm();
    }
  }
}
