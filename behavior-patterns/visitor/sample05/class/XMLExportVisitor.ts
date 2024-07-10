import { IShape } from "../interface/IShape";
import { IVisitor } from "../interface/IVisitor";
import { Circle } from "./Circle";
import { CompoundShape } from "./CompoundShape";
import { Dot } from "./Dot";
import { Rectangle } from "./Rectangle";

export class XMLExportVisitor implements IVisitor {
  visitDot(dot: Dot): string {
    return (
      "<dot>" +
      "\n" +
      "    <id>" +
      dot.getId() +
      "</id>" +
      "\n" +
      "    <x>" +
      dot.getX() +
      "</x>" +
      "\n" +
      "    <y>" +
      dot.getY() +
      "</y>" +
      "\n" +
      "</dot>"
    );
  }

  visitCircle(circle: Circle): string {
    return (
      "<circle>" +
      "\n" +
      "    <id>" +
      circle.getId() +
      "</id>" +
      "\n" +
      "    <x>" +
      circle.getX() +
      "</x>" +
      "\n" +
      "    <y>" +
      circle.getY() +
      "</y>" +
      "\n" +
      "    <radius>" +
      circle.getRadius() +
      "</radius>" +
      "\n" +
      "</circle>"
    );
  }

  visitRectangle(rectangle: Rectangle): string {
    return (
      "<rectangle>" +
      "\n" +
      "    <id>" +
      rectangle.getId() +
      "</id>" +
      "\n" +
      "    <x>" +
      rectangle.getX() +
      "</x>" +
      "\n" +
      "    <y>" +
      rectangle.getY() +
      "</y>" +
      "\n" +
      "    <width>" +
      rectangle.getWidth() +
      "</width>" +
      "\n" +
      "    <height>" +
      rectangle.getHeight() +
      "</height>" +
      "\n" +
      "</rectangle>"
    );
  }

  visitCompoundGraphic(cg: CompoundShape): string {
    return (
      "<compound_graphic>" +
      "\n" +
      "   <id>" +
      cg.getId() +
      "</id>" +
      "\n" +
      this.formatCompoundShape(cg) +
      "</compound_graphic>"
    );
  }

  export(args: IShape[]): string {
    let xmlString = '<?xml version="1.0" encoding="utf-8"?>\n';

    for (const shape of args) {
      xmlString += shape.accept(this) + "\n";
    }

    return xmlString;
  }

  formatCompoundShape(cg: CompoundShape): string {
    let result: string = "";

    for (const shape of cg.children) {
      let obj: string = shape.accept(this);

      obj = "    " + obj.replace(/\n/g, "\n    ") + "\n";
      result += obj;
    }

    return result;
  }
}
