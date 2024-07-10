import { Bar } from "./class/Bar";
import { Baz } from "./class/Baz";
import { Foo } from "./class/Foo";
import { IBase } from "./interface/IBase";

(function main() {
  const objects: IBase[] = [new Foo(), new Bar(), new Baz()];

  for (const element of objects) {
    for (let i = 0; i < objects.length; i++) {
      element.execute(objects[i]);
    }
    console.log("");
  }
})();
