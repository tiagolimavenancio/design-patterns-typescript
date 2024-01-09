export class XboxSensor {
  connect(): void {
    console.log(`A New Joystick was connected to Xbox`);
  }

  receiveButton(button: string) {
    console.log(`${button} was pressed!`);
  }
}
