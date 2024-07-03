import { IState } from "../interface/IState";
import { CeilingFanPullChain } from "./CeilingFanPullChain";
import { Low } from "./Low";

export class Off implements IState {
  pull(wrapper: CeilingFanPullChain): void {
    wrapper.setState(new Low());
    console.log("low speed");
  }
}
