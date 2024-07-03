import { State } from "./State";

export class C extends State {
  // 8. The State derived classes only override the messages they need to
  public on(): void {
    console.log("C + on  = B");
  }
}
