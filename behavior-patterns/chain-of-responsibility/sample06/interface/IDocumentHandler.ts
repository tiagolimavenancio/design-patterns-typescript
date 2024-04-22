export interface IDocumentHandler {
  handler(documentType: string): string;
  setNext(handler: IDocumentHandler): IDocumentHandler;
}
