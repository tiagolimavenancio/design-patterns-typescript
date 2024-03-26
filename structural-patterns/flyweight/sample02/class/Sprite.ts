import { Image } from "./Image";
import { Point } from "./Point";
import { SpriteFlyweight } from "./SpriteFlyweight";

export class Sprite extends SpriteFlyweight {
  protected image: Image;

  constructor(name: string) {
    super();
    this.image = new Image(name);
  }

  public draw(point: Point): void {
    this.image.draw();
    console.log(`Drawing at ${point.x}, ${point.y}`);
  }
}
