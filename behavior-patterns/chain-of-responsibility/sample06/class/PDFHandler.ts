import { IDocumentHandler } from "../interface/IDocumentHandler";

export class PDFHandler implements IDocumentHandler {
  private nextHandler!: IDocumentHandler;

  setNext(handler: IDocumentHandler): IDocumentHandler {
    this.nextHandler = handler;
    return handler;
  }

  handler(documentType: string): string {
    if (documentType === "pdf") {
      return "Handling PDF Document";
    } else if (this.nextHandler) {
      return this.nextHandler.handler(documentType);
    } else {
      return `Cannot handle document type: ${documentType}`;
    }
  }
}
