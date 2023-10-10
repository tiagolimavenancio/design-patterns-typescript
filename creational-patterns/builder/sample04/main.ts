import { ConcreteBuilder1 } from "./class/ConcreteBuilder1";
import { Director } from "./class/Director";

function main(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  // basic object
  director.buildBasicObject();
  builder.build().showParts();

  //full object
  director.buildFullObject();
  builder.build().showParts();

  // custom object can be create without a Director class
  builder.addPartA();
  builder.addPartC();
  builder.build().showParts();
}

const director = new Director();
main(director);
