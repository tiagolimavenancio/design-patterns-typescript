import { Creator } from "./class/Creator";
import { PizzaCreator } from "./class/PizzaCreator";
import { BurgerCreator } from "./class/BurgerCreator";
import { KebabCreator } from "./class/KebabCreator";

function main(creator: Creator) {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
}

const pizzaCreator = new PizzaCreator();
const burgerCreator = new BurgerCreator();
const kebabCreator = new KebabCreator();

console.log("App: Launched with the PizzaCreator");
main(pizzaCreator);

console.log("----------");

console.log("App: Launched with the BurgerCreator");
main(burgerCreator);

console.log("----------");

console.log("App: Launched with the KebabCreator");
main(kebabCreator);
