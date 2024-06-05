import { ICar } from "../interface/ICar";

export class NullCar implements ICar {
  drive(): void {}

  stop(): void {}
}
