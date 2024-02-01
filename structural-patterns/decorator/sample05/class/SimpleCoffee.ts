import { ICoffee } from "../interface/ICoffee";

export class SimpleCoffee implements ICoffee {
  cost(): number {
    return 1;
  }

  description(): string {
    return "Simple Coffee";
  }
}
