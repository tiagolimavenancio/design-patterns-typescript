import { Mediator } from "./Mediator";

export abstract class Colleague {
  constructor(protected mediator: Mediator) {}

  abstract process(data: any): void;
}
