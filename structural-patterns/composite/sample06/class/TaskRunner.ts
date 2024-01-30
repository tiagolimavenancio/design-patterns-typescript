import { IInstruction } from "../interface/IInstruction";

export class TaskRunner {
  tasks: IInstruction[];

  constructor(tasks: IInstruction[]) {
    this.tasks = tasks;
  }

  runTasks() {
    for (const task of this.tasks) {
      task.execute();
    }
  }
}
