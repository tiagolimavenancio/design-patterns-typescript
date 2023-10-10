import { Director } from "./class/Director";
import { FiatBuilder } from "./class/FiatBuilder";

function main() {
  const director = new Director(new FiatBuilder());
  director.builderCar();

  const car = director.getCar();
  console.log({ car });
}

main();
