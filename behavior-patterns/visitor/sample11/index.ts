import { HTMLExporter } from "./class/HTMLExporter";
import { PDFExporter } from "./class/PDFExporter";
import { TextElement } from "./class/TextElement";

(function main() {
  const textElement = new TextElement("This is a text element");

  const pdfExporter = new PDFExporter();
  textElement.accept(pdfExporter);

  const htmlExporter = new HTMLExporter();
  textElement.accept(htmlExporter);
})();
