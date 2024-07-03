import { IState } from "../interface/IState";
import { CeilingFanPullChain } from "./CeilingFanPullChain";
import { High } from "./High";

export class Medium implements IState {
  pull(wrapper: CeilingFanPullChain): void {
    wrapper.setState(new High());
    console.log("high speed");
  }
}
