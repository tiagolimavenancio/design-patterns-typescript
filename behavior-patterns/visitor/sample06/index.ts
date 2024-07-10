import { BinaryTree } from "./class/BinaryTree";
import { ViewInOrderVisitor } from "./class/ViewInOrderVisitor";
import { ViewPreOrderVisitor } from "./class/ViewPreOrderVisitor";
import { ViewPostOrderVisitor } from "./class/ViewPostOrderVisitor";
import { ViewIndentedVisitor } from "./class/ViewIndentedVisitor";

(function main() {
  const tree = new BinaryTree(7);

  tree.insert(15);
  tree.insert(10);
  tree.insert(5);
  tree.insert(2);
  tree.insert(1);
  tree.insert(20);

  console.log("### Exibindo em ordem ###");
  tree.accept(new ViewInOrderVisitor());
  console.log("");

  console.log("### Exibindo pre ordem ###");
  tree.accept(new ViewPreOrderVisitor());
  console.log("");

  console.log("### Exibindo pós ordem ###");
  tree.accept(new ViewPostOrderVisitor());
  console.log("");

  console.log("### Exibindo identado ###");
  tree.accept(new ViewIndentedVisitor());
})();
