import { FactoryCar } from "../interface/FactoryCar";
import { Car } from "./Car";
import { Palio } from "./Palio";

export class FactoryFiat implements FactoryCar {
  createCar(): Car {
    return new Palio();
  }
}
