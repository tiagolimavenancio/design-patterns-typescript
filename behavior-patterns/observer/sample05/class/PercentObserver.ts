import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class PercentObserver extends Observer {
  constructor(subject: Subject) {
    super(subject);
  }

  public update(): void {
    const sumValues =
      this.subject.getState().valueA +
      this.subject.getState().valueB +
      this.subject.getState().valueC;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const percentA = formatter.format(this.subject.getState().valueA / sumValues);
    const percentB = formatter.format(this.subject.getState().valueB / sumValues);
    const percentC = formatter.format(this.subject.getState().valueC / sumValues);

    console.log(
      "Porcentagem:\nValor A: " +
        percentA +
        "%\nValor B: " +
        percentB +
        "%\nValor C: " +
        percentC +
        "%"
    );
  }
}
