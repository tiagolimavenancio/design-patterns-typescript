export class PointPolar {
  private radius: number;
  private angle: number;

  constructor(radius: number, angle: number) {
    this.radius = radius;
    this.angle = angle;
  }

  rotate(angle: number): void {
    this.angle += angle % 360;
  }

  toString(): string {
    return `[radius: ${this.radius}, angle: ${this.angle}]`;
  }
}
