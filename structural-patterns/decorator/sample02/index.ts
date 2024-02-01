import { BorderDecorator } from "./class/BorderDecorator";
import { ScrollDecorator } from "./class/ScrollDecorator";
import { TextField } from "./class/TextField";

(function main() {
  const widget = new BorderDecorator(
    new BorderDecorator(new ScrollDecorator(new TextField(80, 40)))
  );

  widget.draw();
})();
