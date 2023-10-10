import { Director } from "./class/Director";
import { HawaiianPizzaBuilder } from "./class/HawaiianPizzaBuilder";
import { SpicyPizzaBuilder } from "./class/SpicyPizzaBuilder";
import { Builder } from "./interface/Builder";

function constructorHawaiianPizza(director: Director) {
  const hawaiianPizzaBuilder: Builder = new HawaiianPizzaBuilder();

  director.setBuilder(hawaiianPizzaBuilder);
  director.constructorPizza();
}

function constructorSpicyPizza(director: Director) {
  const spicyPizzaBuilder: Builder = new SpicyPizzaBuilder();

  director.setBuilder(spicyPizzaBuilder);
  director.constructorPizza();
}

const director = new Director();
constructorHawaiianPizza(director);
constructorSpicyPizza(director);
