import { TextElement } from "../class/TextElement";

export interface IExportVisitor {
  exportText(textElement: TextElement);
}
