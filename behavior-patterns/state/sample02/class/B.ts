import { State } from "./State";

export class B extends State {
  public on() {
    console.log("B + on  = A");
  }

  public off() {
    console.log("B + off = C");
  }
}
