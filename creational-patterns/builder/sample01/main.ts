import { ConcreteBuilder1 } from "./class/ConcreteBuilder1";
import { Director } from "./class/Director";

function main(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeatureProduct();
  builder.getProduct().listParts();

  console.log("Custom Product");
  builder.producePartA();
  builder.producePartC();

  builder.getProduct().listParts();
}

const director = new Director();
main(director);
