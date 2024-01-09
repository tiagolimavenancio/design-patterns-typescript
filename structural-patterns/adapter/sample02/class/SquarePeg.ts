export class SquarePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number) {
    this.width = width;
  }
}
