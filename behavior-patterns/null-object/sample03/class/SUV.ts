import { ICar } from "../interface/ICar";

export class SUV implements ICar {
  drive(): void {
    console.log("Driving an SUV");
  }

  stop(): void {
    console.log("Stopping an SUV");
  }
}
