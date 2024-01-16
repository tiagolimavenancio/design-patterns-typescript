import { IDevice } from "./interface/IDevice";
import { Tv } from "./class/Tv";
import { Radio } from "./class/Radio";
import { BasicRemote } from "./class/BasicRemote";
import { AdvancedRemote } from "./class/AdvancedRemote";

function main(device: IDevice) {
  const basicRemote = new BasicRemote(device);
  basicRemote.power();
  device.printStatus();

  const advancedRemote = new AdvancedRemote(device);
  advancedRemote.power();
  advancedRemote.mute();
  device.printStatus();
}

main(new Tv());
main(new Radio());
