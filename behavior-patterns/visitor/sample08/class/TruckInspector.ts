import { IVehicleInspector } from "../interface/IVehicleInspector";
import { Car } from "./Car";
import { Motorbike } from "./Motorbike";
import { Truck } from "./Truck";

export class TruckInspector implements IVehicleInspector {
  visitCar(car: Car): void {}
  visitTruck(truck: Truck): void {
    console.log(`Visiting ${truck.constructor.name} with TruckInspector`);
  }
  visitMotorbike(motorbike: Motorbike): void {}
}
