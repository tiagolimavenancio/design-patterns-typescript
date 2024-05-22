import { IComponent } from "../interface/IComponent";
import { Mediator } from "./Mediator";

export class Component implements IComponent {
  name: string;
  mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  receive(message: string): void {
    console.log(`${this.name} : <<< In <<< : ${message}`);
  }

  notify(message: string): void {
    console.log(`${this.name} : >>> Out >>> : ${message}`);
    this.mediator.notify(message, this);
  }
}
