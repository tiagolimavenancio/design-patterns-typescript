import { Job } from "../model/Job";
import { Handler } from "./Handler";

export class DoNothing extends Handler {
  handle(job: Job) {
    console.log("The request object is unhandled");
  }
}
