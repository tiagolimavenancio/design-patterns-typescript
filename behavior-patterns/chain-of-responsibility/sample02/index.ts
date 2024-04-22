import { MonkeyHandler } from "./class/MonkeyHandler";
import { SquirrelHandler } from "./class/SquirrelHandler";
import { DogHandler } from "./class/DogHandler";
import { IHandler } from "./interface/IHandler";

function handle(handler: IHandler) {
  const foods = ["nut", "banana", "cup of coffee"];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);

    const result = handler.handle(food);
    if (result) {
      console.log({ result });
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}

(function main() {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  console.log("Chain: Monkey > Squirrel > Dog");
  handle(monkey);

  console.log(" ");
  console.log("Subchain: Squirrel > Dog");
  handle(squirrel);
})();
