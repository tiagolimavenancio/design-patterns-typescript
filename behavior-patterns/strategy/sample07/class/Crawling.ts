import { IMove } from "../interface/IMoveConstructor";

export class Crawling implements IMove {
  move(position: [number, number]): void {
    position[0] += 0.5;
    console.log(`I am Crawling. New position = ${position}`);
  }
}
