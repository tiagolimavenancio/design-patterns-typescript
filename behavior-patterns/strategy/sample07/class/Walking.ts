import { IMove } from "../interface/IMoveConstructor";

export class Walking implements IMove {
  move(position: [number, number]): void {
    position[0] += 1;
    console.log(`I am Walking. New position = ${position}`);
  }
}
