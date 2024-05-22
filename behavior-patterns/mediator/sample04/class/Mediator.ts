import { Colleague } from "./Colleague";

export abstract class Mediator {
  abstract add(name: string, colleague: Colleague): void;
  abstract send(name: string, data: any): void;
}
