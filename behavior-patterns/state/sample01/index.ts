import { CeilingFanPullChain } from "./class/CeilingFanPullChain";

(function main() {
  const chain = new CeilingFanPullChain();

  let i = 0;
  while (i < 7) {
    chain.pull();
    i++;
  }
})();
