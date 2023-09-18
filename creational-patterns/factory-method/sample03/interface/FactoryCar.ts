import { Car } from "../class/Car";

export interface FactoryCar {
  createCar(): Car;
}
