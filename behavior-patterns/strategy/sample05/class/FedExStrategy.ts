import { IShippingStrategy } from "../interface/IShippingStrategy";

export class FedExStrategy implements IShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    console.log("FedEx shipping cost");
    return weight * distance * 1.5;
  }
}
