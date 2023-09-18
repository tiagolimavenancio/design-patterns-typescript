import { Car } from "./Car";

export class Palio implements Car {
  info(): string {
    return "Model: Palio. Factory: Fiat.";
  }
}
