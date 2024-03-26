import { AppContext } from "./class/AppContext";
import { FlyweightFactory } from "./class/FlyweightFactory";

(function main() {
  const appContext = new AppContext("abracadabra");

  console.log(appContext.output());
  console.log(`abracadabra has ${"abracadabra".length} characters`);
  console.log(`Flyweight has ${FlyweightFactory.getCount()} flyweights`);
})();
