import { GameCharacter } from "./GameCharacter";
import { Memento } from "./Memento";

export class Caretaker {
  public originator: GameCharacter;
  public mementos: Array<Memento>;

  constructor(originator: GameCharacter) {
    this.originator = originator;
    this.mementos = new Array<Memento>();
  }

  save() {
    console.log("CareTaker: Game Save");
    const memento = this.originator.memento;
    this.mementos.push(memento);
  }

  restore(index: number) {
    console.log("CareTaker: Restoring Characters attributes from Memento");
    const memento = this.mementos[index];
    this.originator.memento = memento;
  }
}
