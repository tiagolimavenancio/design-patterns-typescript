import { ICarPrototype } from "../interface/CarPrototype";

export abstract class CarFactory {
  abstract createCar(brand): ICarPrototype;
}
