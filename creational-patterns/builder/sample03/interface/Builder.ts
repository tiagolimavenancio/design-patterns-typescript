import { Engine } from "../class/Engine";
import { GPSNavigator } from "../class/GPSNavigator";
import { TripComputer } from "../class/TripComputer";
import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";

export interface Builder {
  setCarType(type: CarType): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;
  setTripComputer(tripComputer: TripComputer): void;
  setGPSNavigator(gps: GPSNavigator): void;
}
