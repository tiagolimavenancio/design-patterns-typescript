import { IState } from "../interface/IState";
import { MarioCape } from "./MarioCape";
import { MarioFire } from "./MarioFire";
import { MarioSmall } from "./MarioSmall";

export class MarioBig implements IState {
  getMushroom(): IState {
    console.log("Mario is already big and won 1000 points.");
    return this;
  }

  getFlower(): IState {
    console.log("Mario got a fire flower.");
    return new MarioFire();
  }

  getFeather(): IState {
    console.log("Mario with cape.");
    return new MarioCape();
  }

  takeDamage(): IState {
    console.log("Mario got small.");
    return new MarioSmall();
  }
}
