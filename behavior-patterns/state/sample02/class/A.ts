import { State } from "./State";

export class A extends State {
  public on(): void {
    console.log("A + on = C");
  }

  public off(): void {
    console.log("A + off = B");
  }

  public ack(): void {
    console.log("A + ack = A");
  }
}
