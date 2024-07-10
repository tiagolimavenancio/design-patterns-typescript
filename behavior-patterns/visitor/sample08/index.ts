import { Car } from "./class/Car";
import { Motorbike } from "./class/Motorbike";
import { Truck } from "./class/Truck";
import { CarInspector } from "./class/CarInspector";
import { TruckInspector } from "./class/TruckInspector";
import { MotorbikeInspector } from "./class/MotorbikeInspector";

(function main() {
  const car = new Car();
  const truck = new Truck();
  const motorbike = new Motorbike();

  const carInspector = new CarInspector();
  car.accept(carInspector);

  const truckInspector = new TruckInspector();
  truck.accept(truckInspector);

  const motorbikeInspector = new MotorbikeInspector();
  motorbike.accept(motorbikeInspector);
})();
