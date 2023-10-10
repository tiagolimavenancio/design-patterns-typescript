import { Pizza } from "../class/Pizza";

export abstract class Builder {
  protected pizza: Pizza;

  getPizza(): Pizza {
    return this.pizza;
  }

  createNewPizzaProduct(): void {
    this.pizza = new Pizza();
  }

  public abstract buildDough(): void;
  public abstract buildSauce(): void;
  public abstract buildTopping(): void;
}
