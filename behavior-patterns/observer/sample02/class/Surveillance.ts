import { IAlarmListener } from "../interface/IAlarmListener";
import { CheckList } from "./CheckList";

export class Surveillance extends CheckList implements IAlarmListener {
  alarm(): void {
    console.log("Surveillance - by the numbers");
    this.byTheNumbers();
  }

  protected isolate() {
    console.log("  train the cameras");
  }
}
