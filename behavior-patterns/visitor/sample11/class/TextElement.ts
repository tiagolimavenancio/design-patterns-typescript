import { IDocumentElement } from "../interface/IDocumentElement";
import { IExportVisitor } from "../interface/IExportVisitor";

export class TextElement implements IDocumentElement {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  accept(visitor: IExportVisitor): void {
    visitor.exportText(this);
  }
}
