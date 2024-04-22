import { Job } from "../model/Job";
import { Handler } from "./Handler";
import { StackDetector } from "../class/StackDetector";

export class JavaStack extends Handler {
  constructor(successor: Handler) {
    super();
    this.successor = successor;
  }

  handle(job: Job) {
    if (StackDetector.match("Java", job.requirements()))
      // Notify Java developers
      console.log("Java Stack");
    else this.forwardToSuccessor(job);
  }
}
