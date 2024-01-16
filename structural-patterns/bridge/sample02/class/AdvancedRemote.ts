import { IDevice } from "../interface/IDevice";
import { BasicRemote } from "./BasicRemote";

export class AdvancedRemote extends BasicRemote {
  constructor(device: IDevice) {
    super(device);
  }

  mute() {
    console.log("Remote: mute");
    this.device.setVolume(0);
  }
}
