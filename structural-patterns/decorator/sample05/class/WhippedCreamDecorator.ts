import { CoffeeDecorator } from "./CoffeeDecorator";

export class WhippedCreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.7;
  }

  description(): string {
    return this.coffee.description() + ", whipped cream";
  }
}
