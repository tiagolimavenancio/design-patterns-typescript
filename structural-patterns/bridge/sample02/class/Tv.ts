import { IDevice } from "../interface/IDevice";

export class Tv implements IDevice {
  private on: boolean = false;
  private volume: number = 30;
  private channel: number = 1;

  public isEnabled(): boolean {
    return this.on;
  }

  public enable(): void {
    this.on = true;
  }

  public disable(): void {
    this.on = false;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(percent: number): void {
    if (percent > 100) {
      this.volume = 100;
    } else if (percent < 0) {
      this.volume = 0;
    } else {
      this.volume = percent;
    }
  }

  public getChannel(): number {
    return this.channel;
  }

  public setChannel(channel: number): void {
    this.channel = channel;
  }

  public printStatus(): void {
    console.log("------------------------------------");
    console.log("| I'm TV set.");
    console.log("| I'm " + (this.on ? "enabled" : "disabled"));
    console.log("| Current volume is " + this.volume + "%");
    console.log("| Current channel is " + this.channel);
    console.log("------------------------------------\n");
  }
}
