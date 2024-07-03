import { IState } from "../interface/IState";
import { MarioBig } from "./MarioBig";
import { MarioCape } from "./MarioCape";
import { MarioDead } from "./MarioDead";
import { MarioFire } from "./MarioFire";

export class MarioSmall implements IState {
  getMushroom(): IState {
    console.log("Mario bigger");
    return new MarioBig();
  }

  getFlower(): IState {
    console.log("Mario bigger and with fireball");
    return new MarioFire();
  }

  getFeather(): IState {
    console.log("Mario bigger and with cape");
    return new MarioCape();
  }

  takeDamage(): IState {
    console.log("Mario dies");
    return new MarioDead();
  }
}
