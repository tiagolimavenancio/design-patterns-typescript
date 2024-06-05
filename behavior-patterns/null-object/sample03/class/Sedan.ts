import { ICar } from "../interface/ICar";

export class Sedan implements ICar {
  drive(): void {
    console.log("Driving an Sedan");
  }

  stop(): void {
    console.log("Stopping a Sedan");
  }
}
