export class PointCartesian {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  toString(): string {
    return `(${this.x},${this.y})`;
  }
}
