import { ICar } from "../interface/ICar";

export class CarRentalService {
  private car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  rentCar() {
    this.car.drive();
    this.car.stop();
  }
}
