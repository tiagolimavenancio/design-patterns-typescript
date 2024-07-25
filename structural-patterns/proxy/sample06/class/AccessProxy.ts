import { ISubject } from "../interface/ISubject";
import { RealSubject } from "./RealSubject";

export class AccessProxy implements ISubject {
  private realSubject: RealSubject;
  private userRole: string;

  constructor(realSubject: RealSubject, userRole: string) {
    this.realSubject = realSubject;
    this.userRole = userRole;
  }

  private checkAccess(): boolean {
    console.log(`AccessProxy: Checking access for role ${this.userRole}.`);
    return this.userRole === "admin";
  }

  operation(): void {
    if (!this.checkAccess()) {
      console.log("AccessProxy: Access denied.");
      return;
    }

    this.realSubject.operation();
  }
}
