import { IState } from "../interface/IState";
import { MarioBig } from "./MarioBig";
import { MarioCape } from "./MarioCape";

export class MarioFire implements IState {
  getMushroom(): IState {
    console.log("Mario won 1000 points.");
    return this;
  }

  getFlower(): IState {
    console.log("Mario won 1000 points.");
    return this;
  }

  getFeather(): IState {
    console.log("Mario bigger and with cape");
    return new MarioCape();
  }

  takeDamage(): IState {
    console.log("Mario is now bigger.");
    return new MarioBig();
  }
}
