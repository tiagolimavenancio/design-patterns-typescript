import { CarType } from "../enum/CarType";
import { Transmission } from "../enum/Transmission";
import { Builder } from "../interface/Builder";
import { Engine } from "./Engine";
import { GPSNavigator } from "./GPSNavigator";
import { TripComputer } from "./TripComputer";

export class Director {
  constructSportsCar(builder: Builder) {
    builder.setCarType(CarType.SPORTS_CAR);
    builder.setEngine(new Engine(3.0, 0));
    builder.setSeats(2);
    builder.setTransmission(Transmission.SEMI_AUTOMATIC);
    builder.setTripComputer(new TripComputer());
    builder.setGPSNavigator(new GPSNavigator());
  }

  constructCityCar(builder: Builder) {
    builder.setCarType(CarType.CITY_CAR);
    builder.setSeats(2);
    builder.setEngine(new Engine(1.2, 0));
    builder.setTransmission(Transmission.AUTOMATIC);
    builder.setTripComputer(new TripComputer());
    builder.setGPSNavigator(new GPSNavigator());
  }

  constructSUV(builder: Builder) {
    builder.setCarType(CarType.SUV);
    builder.setSeats(4);
    builder.setEngine(new Engine(2.5, 0));
    builder.setTransmission(Transmission.MANUAL);
    builder.setGPSNavigator(new GPSNavigator());
  }
}
