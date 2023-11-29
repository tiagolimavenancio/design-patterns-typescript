import { ChineseCarFactory } from "./class/ChineseCarFactory";

function main() {
  const factory = new ChineseCarFactory();
  const prototypes = ["Audi", "Benz", "BMW"].map((brand) => {
    return factory.createCar(brand);
  });

  console.log({ prototypes });
}

main();
