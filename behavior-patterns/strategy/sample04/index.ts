import { Run } from "./class/Run";
import { Volleyball } from "./class/Volleyball";
import { Person } from "./model/Person";

(function main() {
  const carl = new Person("Carl", new Volleyball());
  carl.exercise();
})();
