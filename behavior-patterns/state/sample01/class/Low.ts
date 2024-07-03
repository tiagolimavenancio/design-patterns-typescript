import { IState } from "../interface/IState";
import { CeilingFanPullChain } from "./CeilingFanPullChain";
import { Medium } from "./Medium";

export class Low implements IState {
  pull(wrapper: CeilingFanPullChain): void {
    wrapper.setState(new Medium());
    console.log("medium speed");
  }
}
