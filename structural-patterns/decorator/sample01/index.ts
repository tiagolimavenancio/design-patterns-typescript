import { I } from "./interface/I";
import { X } from "./class/X";
import { A } from "./class/A";
import { Y } from "./class/Y";
import { Z } from "./class/Z";

(function main() {
  const array: I[] = [new X(new A()), new Y(new X(new A())), new Z(new Y(new X(new A())))];

  for (const item of array) {
    item.doIt();
    console.log(" ");
  }
})();
