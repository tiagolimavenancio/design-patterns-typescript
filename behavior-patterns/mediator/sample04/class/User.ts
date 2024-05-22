import { Colleague } from "./Colleague";

export class User extends Colleague {
  process(data: any): void {
    console.log(`Message receive: ${data}`);
  }

  sendMessageTo(name: string, message: string) {
    this.mediator.send(name, message);
  }
}
