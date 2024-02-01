import { IWidget } from "../interface/IWidget";

// 3. "Core" class with "is a" relationship

export class TextField implements IWidget {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  draw(): void {
    console.log("TextField: " + this.width + " , " + this.height);
  }
}
