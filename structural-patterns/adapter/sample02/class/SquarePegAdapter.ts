import { RoundHole } from "./RoundHole";
import { SquarePeg } from "./SquarePeg";

export class SquarePegAdapter {
  private squarePeg: SquarePeg;

  constructor(width: number) {
    this.squarePeg = new SquarePeg(width);
  }

  public makeFit(roundHole: RoundHole) {
    const amount: number = this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);

    console.log(
      `reducing SquarePeg ${this.squarePeg.getWidth()} by ${amount < 0 ? 0 : amount} amount`
    );

    if (amount > 0) {
      this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);
      console.log(`width is now ${this.squarePeg.getWidth()}`);
    }
  }
}
