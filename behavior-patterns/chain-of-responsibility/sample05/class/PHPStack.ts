import { Job } from "../model/Job";
import { Handler } from "./Handler";
import { StackDetector } from "../class/StackDetector";

export class PHPStack extends Handler {
  constructor(successor: Handler) {
    super();
    this.successor = successor;
  }

  handle(job: Job) {
    if (StackDetector.match("PHP", job.requirements())) {
      console.log("PHP Stack");
    } else {
      this.forwardToSuccessor(job);
    }
  }
}
