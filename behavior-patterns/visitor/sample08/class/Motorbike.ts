import { IVehicle } from "../interface/IVehicle";
import { IVehicleInspector } from "../interface/IVehicleInspector";

export class Motorbike implements IVehicle {
  accept(visitor: IVehicleInspector): void {
    visitor.visitMotorbike(this);
  }
}
