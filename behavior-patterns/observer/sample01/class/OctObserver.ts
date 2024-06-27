import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class OctObserver extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.add(this);
  }

  public update(): void {
    console.log(" " + this.subject.getState().toString(8));
  }
}
