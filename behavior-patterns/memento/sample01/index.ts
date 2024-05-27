import { Caretaker } from "./class/Caretaker";
import { Originator } from "./class/Originator";

(function main() {
  const caretaker = new Caretaker();
  const originator = new Originator();

  originator.setState("State1");
  originator.setState("State2");
  caretaker.addMemento(originator.save());

  originator.setState("State3");
  caretaker.addMemento(originator.save());

  originator.setState("State4");
  originator.restore(caretaker.getMemento());
})();
