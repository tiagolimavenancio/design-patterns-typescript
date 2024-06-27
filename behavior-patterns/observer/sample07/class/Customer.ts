import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class Customer implements IObserver {
  constructor(private name: string) {}

  update(subject: ISubject): void {
    console.log(this.name + " the product you want is back in stock");
  }
}
