import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { TripComputer } from "./TripComputer";

export class Manual {
  private carType: CarType;
  private seats: number;
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gps: GPSNavigator;

  constructor(
    carType: CarType,
    seats: number,
    engine: Engine,
    transmission: Transmission,
    tripComputer: TripComputer,
    gps: GPSNavigator
  ) {
    this.carType = carType;
    this.seats = seats;
    this.engine = engine;
    this.transmission = transmission;
    this.tripComputer = tripComputer;
    this.gps = gps;
  }

  print(): string {
    let info = "";
    info += `Type of car: ${this.carType} \n`;
    info += `Count of seats: ${this.seats} \n`;
    info += `Engine: volume - ${this.engine.getVolume()}; mileage - ${this.engine.getMilage()} \n`;
    info += `Transmission: ${this.transmission} \n`;

    if (this.tripComputer) {
      info += `Trip Computer: Functional \n`;
    } else {
      info += `Trip Computer: N/A`;
    }

    if (this.gps) {
      info += `GPS Navigator: Functional`;
    } else {
      info += `GPS Navigator: N/A`;
    }

    return info;
  }
}
