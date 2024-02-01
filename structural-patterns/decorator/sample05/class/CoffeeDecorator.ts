import { ICoffee } from "../interface/ICoffee";

export abstract class CoffeeDecorator implements ICoffee {
  constructor(protected coffee: ICoffee) {}

  abstract cost(): number;
  abstract description(): string;
}
