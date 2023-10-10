import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";
import { Builder } from "../interface/Builder";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { Manual } from "./Manual";
import { TripComputer } from "./TripComputer";

export class ManualBuilder implements Builder {
  private type: CarType;
  private seats: number;
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gps: GPSNavigator;

  setCarType(type: CarType): void {
    this.type = type;
  }

  setSeats(seats: number): void {
    this.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }

  setGPSNavigator(gps: GPSNavigator): void {
    this.gps = gps;
  }

  getResult(): Manual {
    return new Manual(
      this.type,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gps
    );
  }
}
