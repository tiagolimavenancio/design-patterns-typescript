import { AbstractCarPart } from "../class/AbstractCarPart";
import { Body } from "../class/Body";
import { Engine } from "../class/Engine";
import { Wheel } from "../class/Wheel";
import { IVisitor } from "../interfaces/IVisitor";

export class Car extends AbstractCarPart {
  private parts: AbstractCarPart[] = [];

  constructor(name: string) {
    super(name);

    this.parts = [
      new Body("Utility Body", "ABC-123-21", 1001),
      new Engine("V8 engine", "DEF-456-21", 2555),
      new Wheel("FrontLeft", "GHI-789FL-21", 136),
      new Wheel("FrontRight", "GHI-789FR-21", 136),
      new Wheel("BackLeft", "GHI-789BL-21", 152),
      new Wheel("BackRight", "GHI-789BR-21", 152),
    ];
  }

  accept(visitor: IVisitor): void {
    this.parts.forEach((part) => {
      part.accept(visitor);
    });

    visitor.visit(this);
  }
}
