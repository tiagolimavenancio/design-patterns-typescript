import { IWidget } from "../interface/IWidget";
import { Decorator } from "./Decorator";

// 6. Optional embellishment
export class BorderDecorator extends Decorator {
  constructor(widget: IWidget) {
    super(widget);
  }

  draw(): void {
    // 7. Delegate to base class and add extra stuff
    super.draw();
    console.log(" Border Decorator");
  }
}
