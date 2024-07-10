import { IExportVisitor } from "./IExportVisitor";

export interface IDocumentElement {
  accept(visitor: IExportVisitor): void;
}
