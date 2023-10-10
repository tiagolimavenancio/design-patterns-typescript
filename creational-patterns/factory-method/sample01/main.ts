import { ConcreteCreator01 } from "./class/ConcreteCreator01";
import { ConcreteCreator02 } from "./class/ConcreteCreator02";
import { Creator } from "./class/Creator";

function main(creator: Creator) {
  console.log(`Client: I'm not aware of the creator's class`);
  console.log(creator.operation());
}

const concreteCreator01 = new ConcreteCreator01();
const concreteCreator02 = new ConcreteCreator02();

main(concreteCreator01);

console.log("-------------- Next --------------");

main(concreteCreator02);
