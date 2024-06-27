import { Data } from "../model/Data";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class TableObserver extends Observer {
  constructor(subject: Subject) {
    super(subject);
  }

  public update(): void {
    console.log(
      "Tabela:\nValor A: " +
        this.subject.getState().valueA +
        "\nValor B: " +
        this.subject.getState().valueB +
        "\nValor C: " +
        this.subject.getState().valueC
    );
  }
}
