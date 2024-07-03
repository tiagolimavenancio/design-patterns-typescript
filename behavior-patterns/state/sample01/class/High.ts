import { IState } from "../interface/IState";
import { CeilingFanPullChain } from "./CeilingFanPullChain";
import { Off } from "./Off";

export class High implements IState {
  pull(wrapper: CeilingFanPullChain): void {
    wrapper.setState(new Off());
    console.log("turning off");
  }
}
