import { Builder } from "../interface/Builder";

export class HawaiianPizzaBuilder extends Builder {
  public buildDough(): void {
    this.pizza.setDough("cross");
  }

  public buildSauce(): void {
    this.pizza.setSauce("mild");
  }

  public buildTopping(): void {
    this.pizza.setTopping("ham+pineapple");
  }
}
