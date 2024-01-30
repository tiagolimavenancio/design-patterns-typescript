import { CompositeInstructionSet } from "./class/CompositeInstructionSet";
import { LogInstruction } from "./class/LogInstruction";
import { TaskRunner } from "./class/TaskRunner";

(function main() {
  // Lets start by creating a SingleInstruction and our CompositeInstructionSet
  const startUpLogInstruction = new LogInstruction("Starting", "Task runner booting up...");
  const compositeInstruction = new CompositeInstructionSet("Composite");

  // Now let's define some sub tasks for the CompositeInstructionSet
  const firstSubTask = new LogInstruction("Composite 1", "The first sub task");
  const secondSubTask = new LogInstruction("Composite 2", "The second sub task");

  // Let's add these sub tasks as children to the CompositeInstructionSet we created earlier
  compositeInstruction.addChild(firstSubTask);
  compositeInstruction.addChild(secondSubTask);

  // Now let's create our TaskRunner with our Tasks
  const taskRunner = new TaskRunner([startUpLogInstruction, compositeInstruction]);

  taskRunner.runTasks();

  // Output:
  // Starting: Task runner booting up...
  // Composite 1: The first sub task
  // Composite 2: The second sub task
})();
