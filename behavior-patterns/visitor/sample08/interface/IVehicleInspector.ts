import { Car } from "../class/Car";
import { Motorbike } from "../class/Motorbike";
import { Truck } from "../class/Truck";

export interface IVehicleInspector {
  visitCar(car: Car): void;
  visitTruck(truck: Truck): void;
  visitMotorbike(motorbike: Motorbike): void;
}
