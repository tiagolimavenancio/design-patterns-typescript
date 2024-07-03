import { CeilingFanPullChain } from "../class/CeilingFanPullChain";

export interface IState {
  pull(wrapper: CeilingFanPullChain): void;
}
