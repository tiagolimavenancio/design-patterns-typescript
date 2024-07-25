import { ISubject } from "../interface/ISubject";

export class RealSubject implements ISubject {
  operation(): void {
    console.log("RealSubject: Handling operation.");
  }
}
