import { ISubject } from "../interface/ISubject";
import { RealSubject } from "./RealSubject";

export class LoggingProxy implements ISubject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  private logAccess(): void {
    console.log("LoggingProxy: Logging access to RealSubject");
  }

  operation(): void {
    this.logAccess();
    this.realSubject.operation();
  }
}
