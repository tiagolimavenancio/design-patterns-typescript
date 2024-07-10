import { IVehicleInspector } from "../interface/IVehicleInspector";
import { Car } from "./Car";
import { Motorbike } from "./Motorbike";
import { Truck } from "./Truck";

export class MotorbikeInspector implements IVehicleInspector {
  visitCar(car: Car): void {}
  visitTruck(truck: Truck): void {}
  visitMotorbike(motorbike: Motorbike): void {
    console.log(`Visiting ${motorbike.constructor.name} with MotorbikeInspector`);
  }
}
