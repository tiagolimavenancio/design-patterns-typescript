import { IFlyweight } from "../interfaces/IFlyweight";
import { Position } from "../model/Position";

export class PositionFlyweight implements IFlyweight {
  private position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  display(extrinsicState: any): void {
    console.log(`Position: ${this.position.name} (${this.position.role})`);
  }

  getPosition(): Position {
    return this.position;
  }
}
