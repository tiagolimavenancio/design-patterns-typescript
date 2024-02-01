import { IWidget } from "../interface/IWidget";

// 2. Second level base class with "is a" relationship

export abstract class Decorator implements IWidget {
  // 4. "has a" relationship
  private widget: IWidget;

  constructor(widget: IWidget) {
    this.widget = widget;
  }

  // 5. Delegation
  draw(): void {
    this.widget.draw();
  }
}
