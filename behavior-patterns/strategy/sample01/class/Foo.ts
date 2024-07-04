import { StrategySolution } from "./StrategySolution";

export class Foo extends StrategySolution {
  private state: number = 1;

  start(): void {
    console.log("start");
  }

  stop(): void {
    console.log("stop");
  }

  nextTry(): boolean {
    console.log("NextTry " + this.state++ + " ");
    return true;
  }

  isSolution(): boolean {
    console.log("isSolution - " + (this.state === 3) + " ");
    return this.state === 3;
  }
}
