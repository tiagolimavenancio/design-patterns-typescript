import { IShippingStrategy } from "../interface/IShippingStrategy";

export class ShippingCostCalculator {
  private shipping: IShippingStrategy;

  constructor(shipping: IShippingStrategy) {
    this.shipping = shipping;
  }

  setShipping(shipping: IShippingStrategy): void {
    this.shipping = shipping;
  }

  calculateCost(weight: number, distance: number): number {
    return this.shipping.calculateCost(weight, distance);
  }
}
