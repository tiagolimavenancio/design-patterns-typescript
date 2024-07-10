import { IVehicleInspector } from "./IVehicleInspector";

export interface IVehicle {
  accept(visitor: IVehicleInspector): void;
}
