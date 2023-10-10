import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { TripComputer } from "./TripComputer";

export class Car {
  private carType: CarType;
  private seats: number;
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gpsNavigator: GPSNavigator;
  private fuel: number = 0;

  constructor(
    carType: CarType,
    seats: number,
    engine: Engine,
    transmission: Transmission,
    tripComputer: TripComputer,
    gpsNavigator: GPSNavigator
  ) {
    this.carType = carType;
    this.seats = seats;
    this.engine = engine;
    this.transmission = transmission;
    this.tripComputer = tripComputer;
    this.gpsNavigator = gpsNavigator;

    if (this.tripComputer) {
      this.tripComputer.setCar(this);
    }
  }

  getCarType(): CarType {
    return this.carType;
  }

  getFuel(): number {
    return this.fuel;
  }

  setFuel(fuel: number) {
    this.fuel = fuel;
  }

  getSeats(): number {
    return this.seats;
  }

  getEngine(): Engine {
    return this.engine;
  }

  getTransmission(): Transmission {
    return this.transmission;
  }

  getTripComputer(): TripComputer {
    return this.tripComputer;
  }

  getGPSNavigator(): GPSNavigator {
    return this.gpsNavigator;
  }
}
