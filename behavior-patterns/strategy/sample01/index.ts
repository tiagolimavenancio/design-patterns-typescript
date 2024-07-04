import { Bar } from "./class/Bar";
import { Foo } from "./class/FOO";
import { IStrategy } from "./interface/IStrategy";

const execute = (strategy: IStrategy) => {
  strategy.solve();
};

(function main() {
  const algorithms: IStrategy[] = [];
  algorithms.push(new Foo());
  algorithms.push(new Bar());

  for (const strategy of algorithms) {
    execute(strategy);
  }
})();
