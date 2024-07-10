import { IVehicle } from "../interface/IVehicle";
import { IVehicleInspector } from "../interface/IVehicleInspector";

export class Car implements IVehicle {
  accept(visitor: IVehicleInspector): void {
    visitor.visitCar(this);
  }
}
