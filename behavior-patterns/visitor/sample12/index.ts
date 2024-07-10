import { Car } from "./model/Car";
import { PrintPartsVisitor } from "./class/PrintPartsVisitor";
import { TotalPriceVisitor } from "./class/TotalPriceVisitor";

(function main() {
  const car = new Car("DeLorean");
  car.accept(new PrintPartsVisitor());

  const totalPriceVisitor = new TotalPriceVisitor();
  car.accept(totalPriceVisitor);

  console.log(`Total price: ${totalPriceVisitor.getTotalPrice()}`);
})();
