import { Block } from "./class/Block";
import { SimpleText } from "./class/SimpleText";
import { SimpleImage } from "./class/SimpleImage";

(function main() {
  const nestedBlock = new Block();
  nestedBlock.add(new SimpleText("Hello, check the following image:"));
  nestedBlock.add(new SimpleImage("https://example.com/image.png"));

  const mainBlock = new Block();
  mainBlock.add(nestedBlock);
  mainBlock.add(new SimpleText("Thanks for reading!"));

  mainBlock.render();
})();
