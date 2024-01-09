import { PlayStationSensor } from "./PlayStationSensor";

export class AdapterXboxToPlaystation {
  private readonly playstationSensor: PlayStationSensor;

  constructor(playstationSensor: PlayStationSensor) {
    this.playstationSensor = playstationSensor;
  }

  connect() {
    this.playstationSensor.connect();
  }

  private convertButton(xboxButton: string): string {
    switch (xboxButton) {
      case "Y":
        return "Triangle";
      case "B":
        return "Circle";
      case "A":
        return "Cross";
      case "X":
        return "Square";
      default:
        throw new Error("Invalid Button");
    }
  }

  receiveButton(button: string) {
    button = this.convertButton(button);
    this.playstationSensor.receiveButton(button);
  }
}
