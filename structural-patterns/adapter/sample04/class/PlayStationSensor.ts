export class PlayStationSensor {
  public connect(): void {
    console.log(`A New Joystick was connected to Playstation`);
  }

  public receiveButton(button: string) {
    console.log(`${button} was pressed!`);
  }
}
