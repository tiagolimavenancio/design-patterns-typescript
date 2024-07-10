import { IShape } from "./interface/IShape";
import { Dot } from "./class/Dot";
import { Circle } from "./class/Circle";
import { Rectangle } from "./class/Rectangle";
import { CompoundShape } from "./class/CompoundShape";

import { XMLExportVisitor } from "./class/XMLExportVisitor";

function exportXML(shapes: IShape[]) {
  const exportVisitor = new XMLExportVisitor();
  console.log(exportVisitor.export(shapes));
}

(function main() {
  const dot = new Dot(1, 10, 55);
  const circle = new Circle(2, 23, 15, 10);
  const rectangle = new Rectangle(3, 10, 17, 20, 30);

  const compoundShape = new CompoundShape(4);
  compoundShape.add(dot);
  compoundShape.add(circle);
  compoundShape.add(rectangle);

  const c = new CompoundShape(5);
  c.add(dot);
  compoundShape.add(c);

  exportXML([circle, compoundShape]);
})();
