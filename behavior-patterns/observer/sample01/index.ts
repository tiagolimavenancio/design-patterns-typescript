import { BinObserver } from "./class/BinObserver";
import { HexObserver } from "./class/HexObserver";
import { OctObserver } from "./class/OctObserver";
import { Subject } from "./class/Subject";

(function main() {
  const sub = new Subject();

  new HexObserver(sub);
  new OctObserver(sub);
  new BinObserver(sub);

  for (let i = 0; i < 5; i++) {
    console.log(`Value: ${i}`);
    sub.setState(i);
  }
})();
