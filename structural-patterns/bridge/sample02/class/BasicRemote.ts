import { IDevice } from "../interface/IDevice";
import { IRemote } from "../interface/IRemote";

export class BasicRemote implements IRemote {
  protected device: IDevice;

  public constructor(device: IDevice) {
    this.device = device;
  }

  power(): void {
    console.log("Remote: power toggle");

    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    console.log("Remote: volume down");
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    console.log("Remote: volume up");
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    console.log("Remote: channel down");
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    console.log("Remote: channel up");
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
