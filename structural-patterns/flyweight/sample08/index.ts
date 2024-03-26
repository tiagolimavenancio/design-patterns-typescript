import { HtmlElement } from "./class/HtmlElement";

(function main() {
  for (let i = 0; i < 100; i++) {
    const style = Math.floor(Math.random() * 2);
    const color = Math.floor(Math.random() * 3);

    const element = new HtmlElement(style, color);
    element.setContent("This element uses a flyweight for rendering!");
    element.write();
  }
})();
