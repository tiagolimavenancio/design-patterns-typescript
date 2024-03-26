import { FlyweightFactory } from "./class/FlyweightFactory";

const factory = new FlyweightFactory([
  ["Chevrolet", "Camaro2018", "pink"],
  ["Mercedes Benz", "C300", "black"],
  ["Mercedes Benz", "C500", "red"],
  ["BMW", "M5", "red"],
  ["BMW", "X6", "white"],
]);
factory.listFlyweights();

function addCarToPoliceDatabase(
  ff: FlyweightFactory,
  places: string,
  owner: string,
  brand: string,
  model: string,
  color: string
) {
  console.log("\nClient: Adding a car to database.");

  const flyweight = ff.getFlyweight([brand, model, color]);

  // The client code either stores or calculates extrinsic state and passes it
  // to the flyweight's methods.
  flyweight.operation([places, owner]);
}

(function main() {
  addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "M5", "red");
  addCarToPoliceDatabase(factory, "CL234IR", "James Doe", "BMW", "X1", "red");

  factory.listFlyweights();
})();
