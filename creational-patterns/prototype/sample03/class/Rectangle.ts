import { Shape } from "./Shape";

export class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(target?: Rectangle) {
    super(target);
    if (target) {
      this.width = target.width;
      this.height = target.height;
    }
  }

  public clone(): Shape {
    return new Rectangle(this);
  }

  public equals(object2: object): boolean {
    if (!(object2 instanceof Rectangle) || !super.equals(object2)) {
      return false;
    }

    const shape2 = object2 as Rectangle;
    return this.width === shape2.width && this.height === shape2.height;
  }
}
