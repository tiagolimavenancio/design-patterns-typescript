import { Prototype } from "../interface/Prototype";

export class PrototypeModule {
  static prototypes = new Array<Prototype>();

  addPrototype(p: Prototype): void {
    PrototypeModule.prototypes.push(p);
  }

  createPrototype(name: string): Prototype | null {
    for (const p of PrototypeModule.prototypes) {
      if (p.getName() === name) {
        return p.clone();
      }
    }

    return null;
  }
}
