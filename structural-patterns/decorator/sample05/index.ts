import { ICoffee } from "./interface/ICoffee";
import { SimpleCoffee } from "./class/SimpleCoffee";
import { MilkDecorator } from "./class/MilkDecorator";
import { SugarDecorator } from "./class/SugarDecorator";
import { WhippedCreamDecorator } from "./class/WhippedCreamDecorator";
import { CaramelDecorator } from "./class/CaramelDecorator";

(function main() {
  let coffee = new SimpleCoffee();

  coffee = new MilkDecorator(coffee);
  coffee = new SugarDecorator(coffee);
  coffee = new WhippedCreamDecorator(coffee);
  coffee = new CaramelDecorator(coffee);

  console.log(`Cost: $${coffee.cost()}`); // Outputs: Cost: $3.0
  console.log(`Description: ${coffee.description()}`); // Outputs: Description: Simple coffee, milk, sugar, whipped cream, caramel
})();
