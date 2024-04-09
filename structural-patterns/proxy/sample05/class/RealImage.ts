import { IImage } from "../interface/IIMage";

export class RealImage implements IImage {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log("Loading " + this.fileName);
  }

  public display(): void {
    console.log("Displaying " + this.fileName);
  }
}
