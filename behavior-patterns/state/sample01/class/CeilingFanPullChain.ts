import { IState } from "../interface/IState";
import { Off } from "./Off";

export class CeilingFanPullChain {
  private currentState: IState;

  constructor() {
    this.currentState = new Off();
  }

  public setState(s: IState): void {
    this.currentState = s;
  }

  public pull(): void {
    this.currentState.pull(this);
  }
}
