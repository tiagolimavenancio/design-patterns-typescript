import { ISubject } from "../interface/ISubject";
import { RealSubject } from "./RealSubject";

export class LazyProxy implements ISubject {
  private realSubject: RealSubject | null = null;

  operation(): void {
    if (this.realSubject === null) {
      this.realSubject = new RealSubject();
    }

    this.realSubject.operation();
  }
}
