import { IElement } from "./interface/IElement";
import { Foo } from "./class/Foo";
import { Bar } from "./class/Bar";
import { Baz } from "./class/Baz";
import { UpVisitor } from "./class/UpVisitor";
import { DownVisitor } from "./class/DownVisitor";

(function main() {
  const list: IElement[] = [new Foo(), new Bar(), new Baz()];

  const up = new UpVisitor();
  const down = new DownVisitor();

  for (const element of list) {
    element.accept(up);
  }

  for (const element of list) {
    element.accept(down);
  }
})();
