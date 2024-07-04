import { IMove } from "../interface/IMoveConstructor";

export class Sprinting implements IMove {
  move(position: [number, number]): void {
    position[0] += 2;
    console.log(`I am Running. New position = ${position}`);
  }
}
