import { Customer } from "./class/Customer";
import { Product } from "./class/Product";

(function main() {
  const product = new Product();

  const john = new Customer("John");
  const jane = new Customer("Jane");

  product.addObserver(john);
  product.addObserver(jane);

  product.restock();
})();
