import { Director } from "./class/Director";
import { CarBuilder } from "./class/CarBuilder";
import { ManualBuilder } from "./class/ManualBuilder";
import { Car } from "./class/Car";
import { Manual } from "./class/Manual";

function main() {
  const director = new Director();

  const builder = new CarBuilder();
  director.constructSportsCar(builder);

  const car: Car = builder.getResult();
  console.log(car.getCarType());

  const manualBuilder = new ManualBuilder();
  director.constructSportsCar(manualBuilder);

  const manual: Manual = manualBuilder.getResult();
  console.log(manual.print());
}
