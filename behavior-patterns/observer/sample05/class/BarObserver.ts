import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class BarObserver extends Observer {
  constructor(subject: Subject) {
    super(subject);
  }

  public update(): void {
    let barA = "";
    let barB = "";
    let barC = "";

    for (let i = 0; i < this.subject.getState().valueA; i++) {
      barA += "=";
    }

    for (let i = 0; i < this.subject.getState().valueB; i++) {
      barB += "=";
    }

    for (let i = 0; i < this.subject.getState().valueC; i++) {
      barC += "=";
    }

    console.log("Barras:\nValor A: " + barA + "\nValor B: " + barB + "\nValor C: " + barC);
  }
}
