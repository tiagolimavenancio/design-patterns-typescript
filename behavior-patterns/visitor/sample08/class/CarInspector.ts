import { IVehicleInspector } from "../interface/IVehicleInspector";
import { Car } from "./Car";
import { Motorbike } from "./Motorbike";
import { Truck } from "./Truck";

export class CarInspector implements IVehicleInspector {
  visitCar(car: Car): void {
    console.log(`Visiting ${car.constructor.name} with CarInspector`);
  }

  visitTruck(truck: Truck): void {}
  visitMotorbike(motorbike: Motorbike): void {}
}
