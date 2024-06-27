import { Subject } from "./Subject";

export abstract class Observer {
  protected subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  public abstract update(): void;
}
