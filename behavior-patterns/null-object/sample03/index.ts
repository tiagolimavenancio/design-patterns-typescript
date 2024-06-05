import { CarRentalService } from "./class/CarRentalService";
import { NullCar } from "./class/NullCar";
import { SUV } from "./class/SUV";
import { Sedan } from "./class/Sedan";

(function main() {
  const suv = new SUV();
  const sedan = new Sedan();
  const nullCar = new NullCar();

  const rentCarService1 = new CarRentalService(suv);
  const rentCarService2 = new CarRentalService(sedan);
  const rentCarService3 = new CarRentalService(nullCar);

  rentCarService1.rentCar();
  rentCarService2.rentCar();
  rentCarService3.rentCar();
})();
