import { Adaptee } from "./class/Adaptee";
import { Adapter } from "./class/Adapter";
import { Target } from "./class/Target";

function main(target: Target) {
  console.log(target.request());
}

const target = new Target();
main(target);

const adaptee = new Adaptee();
console.log("Client: The Adaptee class has a weird interface. See, I don't understand it:");
console.log(`Adaptee: ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
main(adapter);
