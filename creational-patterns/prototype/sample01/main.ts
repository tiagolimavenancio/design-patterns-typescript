import { PrototypeAlpha } from "./class/PrototypeAlpha";
import { PrototypeBeta } from "./class/PrototypeBeta";
import { PrototypeModule } from "./class/PrototypeModule";
import { ReleasePrototype } from "./class/ReleasePrototype";

function initializePrototypes() {
  PrototypeModule.addPrototype(new PrototypeAlpha());
  PrototypeModule.addPrototype(new PrototypeBeta());
  PrototypeModule.addPrototype(new ReleasePrototype());
}

function main(args: string[]) {
  if (args.length > 0) {
    initializePrototypes();

    const prototypes = new Array();

    for (const name of args) {
      const prototype = PrototypeModule.createPrototype(name);
      if (prototype) {
        prototypes.push(prototype);
      }
    }

    for (const p of prototypes) {
      p.execute();
    }
  } else {
    console.log("Run again with arguments of command string");
  }
}
