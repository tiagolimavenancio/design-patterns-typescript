import { Line } from "./class/Line";
import { LineAdapter } from "./class/LineAdapter";
import { Rectangle } from "./class/Rectangle";
import { RectangleAdapter } from "./class/RectangleAdapter";
import { Shape } from "./interface/Shape";

(function main() {
  const shapes: Shape[] = [new RectangleAdapter(new Rectangle()), new LineAdapter(new Line())];

  const x1 = 10;
  const y1 = 20;
  const x2 = 30;
  const y2 = 60;

  for (const shape of shapes) {
    shape.draw(x1, y1, x2, y2);
  }
})();
