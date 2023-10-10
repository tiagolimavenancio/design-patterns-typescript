import { AbstractFactory } from "./interface/AbstractFactory";
import { WarriorFactory } from "./factories/WarriorFactory";
import { OrcFactory } from "./factories/OrcFactory";
import { MageFactory } from "./factories/MageFactory";

function clientCode(factory: AbstractFactory) {
  const sword = factory.createWeapon();
  const armor = factory.createArmor();

  console.log(armor.usefulFunction());
  console.log(armor.usefulFunctionWithWeapon(sword));
}

console.log("Client: WarriorFactory");
clientCode(new WarriorFactory());

console.log("----------------");

console.log("Client: OrcFactory");
clientCode(new OrcFactory());

console.log("----------------");

console.log("Client: MageFactory");
clientCode(new MageFactory());
