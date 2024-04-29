import { ComplexCommand } from "./class/ComplexCommand";
import { Invoker } from "./class/Invoker";
import { Receiver } from "./class/Receiver";
import { SimpleCommand } from "./class/SimpleCommand";

(function main() {
  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand("Say hi!"));

  const receiver = new Receiver();
  invoker.setOnFinish(new ComplexCommand(receiver, "Send email", "Save report"));

  invoker.doSomethingImportant();
})();
