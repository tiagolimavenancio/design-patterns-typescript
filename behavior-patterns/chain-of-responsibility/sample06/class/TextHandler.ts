import { IDocumentHandler } from "../interface/IDocumentHandler";

export class TextHandler implements IDocumentHandler {
  private nextHandler!: IDocumentHandler;

  setNext(handler: IDocumentHandler): IDocumentHandler {
    this.nextHandler = handler;
    return handler;
  }

  handler(documentType: string): string {
    if (documentType === "text") {
      return `Handling Text Document`;
    } else if (this.nextHandler) {
      return this.nextHandler.handler(documentType);
    } else {
      return `Cannot Handle Document Type: ${documentType}`;
    }
  }
}
