import { Job } from "../model/Job";

export abstract class Handler {
  protected successor: Handler | undefined;

  forwardToSuccessor(job: Job): void {
    if (this.successor) {
      this.successor.handle(job);
    }
  }

  abstract handle(job: Job): any;
}
