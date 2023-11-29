export abstract class Shape {
  public x: number;
  public y: number;
  public color: string;

  constructor(target?: Shape) {
    if (target) {
      this.x = target.x;
      this.y = target.y;
      this.color = target.color;
    }
  }

  public abstract clone(): Shape;

  public equals(object2: object): boolean {
    if (!(object2 instanceof Shape)) return false;

    const shape2: Shape = object2 as Shape;

    return shape2.x === this.x && shape2.y === this.y && shape2.color === this.color;
  }
}
