import { ISubject } from "../interface/ISubject";
import { RealSubject } from "./RealSubject";

/**
 * The Proxy has an interface identical to the RealSubject.
 */

export class Proxy implements ISubject {
  private realSubject: RealSubject;

  /**
   * The Proxy maintains a reference to an object of the RealSubject class. It
   * can be either lazy-loaded or passed to the Proxy by the client.
   */
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  /**
   * The most common applications of the Proxy pattern are lazy loading,
   * caching, controlling the access, logging, etc. A Proxy can perform one of
   * these things and then, depending on the result, pass the execution to the
   * same method in a linked RealSubject object.
   */

  private checkAccess(): boolean {
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: Logging the time of request.");
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }
}
