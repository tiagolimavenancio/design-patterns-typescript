import { FedExStrategy } from "./class/FedExStrategy";
import { ShippingCostCalculator } from "./class/ShippingCostCalculator";
import { UPSStrategy } from "./class/UPSStrategy";
import { USPSStrategy } from "./class/USPSStrategy";

(function main() {
  const fedex = new FedExStrategy();
  const ups = new UPSStrategy();
  const usps = new USPSStrategy();

  let cost = 0;

  const calculator = new ShippingCostCalculator(fedex);
  cost = calculator.calculateCost(10, 100);
  console.log({ cost });

  calculator.setShipping(ups);
  cost = calculator.calculateCost(10, 100);
  console.log({ cost });

  calculator.setShipping(usps);
  cost = calculator.calculateCost(10, 100);
  console.log({ cost });
})();
