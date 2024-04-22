import { PDFHandler } from "./class/PDFHandler";
import { TextHandler } from "./class/TextHandler";

(function main() {
  const pdfHandler = new PDFHandler();
  const textHandler = new TextHandler();

  pdfHandler.setNext(textHandler);

  console.log(pdfHandler.handler("pdf"));
  console.log(pdfHandler.handler("text"));
  console.log(pdfHandler.handler("excel"));
})();
