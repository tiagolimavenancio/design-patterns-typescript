import { IExportVisitor } from "../interface/IExportVisitor";
import { TextElement } from "./TextElement";

export class PDFExporter implements IExportVisitor {
  exportText(textElement: TextElement) {
    console.log(`Exporting ${textElement.getContent()} to PDF`);
  }
}
