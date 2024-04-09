import { IImage } from "../interface/IIMage";
import { RealImage } from "./RealImage";

export class ProxyImage implements IImage {
  private realImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }

    this.realImage.display();
  }
}
