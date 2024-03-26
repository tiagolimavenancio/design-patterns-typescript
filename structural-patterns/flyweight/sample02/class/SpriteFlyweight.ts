import { Point } from "./Point";

export abstract class SpriteFlyweight {
  public abstract draw(point: Point): void;
}
