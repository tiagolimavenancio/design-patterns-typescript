import { IImage } from "../interface/IImage";

export class Processor {
  private static readonly randomNumber: number = Math.floor(Math.random() * 2);
  private static nextID: number = 1;
  private id: number = Processor.nextID++;

  execute(img: IImage): boolean {
    if (Processor.randomNumber !== 0) {
      console.log(`Processor ${this.id} - is busy`);
      return false;
    }

    console.log(`Processor ${this.id} - ${img.process()}`);
    return true;
  }
}
