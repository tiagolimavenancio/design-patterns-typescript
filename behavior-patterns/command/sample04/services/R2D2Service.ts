export class R2D2Service {
  constructor() {}

  clean() {
    console.log("R2D2 is cleaning the room");
  }

  move(direction: string) {
    console.log(`R2D2 is moving to ${direction}`);
  }
}
