import { Subsystem1 } from "./class/Subsystem1";
import { Subsystem2 } from "./class/Subsystem2";
import { Facade } from "./class/Facade";

(function main() {
  const subSystem1 = new Subsystem1();
  const subSystem2 = new Subsystem2();

  const facade = new Facade(subSystem1, subSystem2);
  console.log(facade.operation());
})();
