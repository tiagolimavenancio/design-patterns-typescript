import { IExportVisitor } from "../interface/IExportVisitor";
import { TextElement } from "./TextElement";

export class HTMLExporter implements IExportVisitor {
  exportText(textElement: TextElement) {
    console.log(`Exporting text element to HTML: ${textElement.getContent()}`);
  }
}
