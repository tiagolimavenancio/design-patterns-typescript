import { IMove } from "../interface/IMoveConstructor";

export class GameCharacter {
  position: [number, number] = [0, 0];

  move(movement: IMove) {
    movement.move(this.position);
  }
}
