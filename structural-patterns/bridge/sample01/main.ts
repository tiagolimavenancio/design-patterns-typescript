import { Abstraction } from "./class/Abstraction";
import { ConcreteImplementationA } from "./class/ConcreteImplementationA";
import { ConcreteImplementationB } from "./class/ConcreteImplementationB";
import { ExtendedAbstraction } from "./class/ExtendedAbstraction";

function main(abstraction: Abstraction) {
  console.log({ abstraction });
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
main(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
main(abstraction);
