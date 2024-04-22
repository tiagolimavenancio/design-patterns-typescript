import { Job } from "../model/Job";
import { Handler } from "./Handler";
import { StackDetector } from "../class/StackDetector";

export class JavaScriptStack extends Handler {
  constructor(successor: Handler) {
    super();
    this.successor = successor;
  }

  handle(job: Job) {
    if (StackDetector.match("JavaScript", job.requirements())) console.log("JavaScript Stack");
    else this.forwardToSuccessor(job);
  }
}
