import { Composite } from "./class/Composite";
import { Leaf } from "./class/Leaf";

(function main() {
  const containers: Composite[] = new Array(3);

  for (let i = 0; i < containers.length; i++) {
    containers[i] = new Composite();

    for (let j = 1; j < 4; j++) {
      containers[i].add(new Leaf(i * containers.length + j));
    }
  }

  for (let i = 1; i < containers.length; i++) {
    containers[0].add(containers[i]);
  }

  containers[0].traverse();
  console.log("");
})();
