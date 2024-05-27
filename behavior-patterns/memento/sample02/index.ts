import { Caretaker } from "./class/Caretaker";
import { Originator } from "./class/Originator";

(function main() {
  const originator = new Originator("Super-duper-super-puper-super.");
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log(" ");
  caretaker.showHistory();

  console.log("Client: Now, let's rollback!\n");
  caretaker.undo();

  console.log("\nClient: Once more!\n");
  caretaker.undo();
})();
