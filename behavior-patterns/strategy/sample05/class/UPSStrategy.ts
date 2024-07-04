import { IShippingStrategy } from "../interface/IShippingStrategy";

export class UPSStrategy implements IShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    console.log("UPS shipping cost");
    return weight * distance * 0.39;
  }
}
