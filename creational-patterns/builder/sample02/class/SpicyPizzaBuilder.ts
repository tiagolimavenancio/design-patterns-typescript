import { Builder } from "../interface/Builder";

export class SpicyPizzaBuilder extends Builder {
  public buildDough(): void {
    this.pizza.setDough("pan baked");
  }

  public buildSauce(): void {
    this.pizza.setSauce("hot");
  }

  public buildTopping(): void {
    this.pizza.setTopping("pepperoni+salami");
  }
}
