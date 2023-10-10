import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";
import { Builder } from "../interface/Builder";
import { Car } from "./Car";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { TripComputer } from "./TripComputer";

export class CarBuilder implements Builder {
  private type: CarType;
  private seats: number;
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gps: GPSNavigator;

  public setCarType(type: CarType): void {
    this.type = type;
  }

  public setSeats(seats: number): void {
    this.seats = seats;
  }

  public setEngine(engine: Engine): void {
    this.engine = engine;
  }

  public setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  public setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }

  public setGPSNavigator(gps: GPSNavigator): void {
    this.gps = gps;
  }

  public getResult(): Car {
    return new Car(
      this.type,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gps
    );
  }
}
