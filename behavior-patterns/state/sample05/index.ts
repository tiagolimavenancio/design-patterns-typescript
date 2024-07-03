import { Transformation1 } from "./class/Transformation1";
import { Freeza } from "./model/Freeza";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const freeza = new Freeza(new Transformation1());

(async () => {
  while (freeza.isAlive()) {
    freeza.attack();
    await sleep(1000);

    freeza.defend(10);
    await sleep(1000);
  }
})();
