export interface IShippingStrategy {
  calculateCost(weight: number, distance: number): number;
}
