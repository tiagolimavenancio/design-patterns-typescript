import { IVehicle } from "../interface/IVehicle";
import { IVehicleInspector } from "../interface/IVehicleInspector";

export class Truck implements IVehicle {
  accept(visitor: IVehicleInspector): void {
    visitor.visitTruck(this);
  }
}
