import { IShippingStrategy } from "../interface/IShippingStrategy";

export class USPSStrategy implements IShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    console.log("USPS shipping cost");
    return weight * distance * 2.4;
  }
}
