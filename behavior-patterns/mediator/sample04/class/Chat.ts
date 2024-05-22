import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class Chat extends Mediator {
  private users: Map<string, Colleague> = new Map<string, Colleague>();

  add(name: string, colleague: Colleague): void {
    this.users.set(name, colleague);
  }

  send(name: string, data: any): void {
    if (!this.users.has(name)) {
      throw new Error("There is no user with this name.");
    }

    const user = this.users.get(name);
    user!.process(data);
  }
}
