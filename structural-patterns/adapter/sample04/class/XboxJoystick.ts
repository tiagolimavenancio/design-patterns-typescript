import { XboxSensor } from "./XboxSensor";

export class XboxJoystick {
  private readonly xboxSensor: XboxSensor;

  constructor(xboxSensor: XboxSensor) {
    this.xboxSensor = xboxSensor;
  }

  connect(): void {
    this.xboxSensor.connect();
  }

  yPressed(): void {
    this.xboxSensor.receiveButton("Y");
  }

  bPressed(): void {
    this.xboxSensor.receiveButton("B");
  }

  aPressed(): void {
    this.xboxSensor.receiveButton("A");
  }

  xPressed(): void {
    this.xboxSensor.receiveButton("X");
  }
}
