import { Shape } from "../class/Shape";

export class Circle extends Shape {
  public radius: number;

  constructor(target?: Circle) {
    super(target);
    if (target) {
      this.radius = target.radius;
    }
  }

  public clone(): Shape {
    return new Circle(this);
  }

  public equals(object2: object): boolean {
    if (!(object2 instanceof Circle) || !super.equals(object2)) {
      return false;
    }

    const shape2 = object2 as Circle;
    return this.radius === shape2.radius;
  }
}
