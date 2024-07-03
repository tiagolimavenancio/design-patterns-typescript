import { IState } from "../interface/IState";
import { MarioFire } from "./MarioFire";
import { MarioBig } from "./MarioBig";

export class MarioCape implements IState {
  getMushroom(): IState {
    console.log("Mario won 1000 points.");
    return this;
  }

  getFlower(): IState {
    console.log("Mario won fire power.");
    return new MarioFire();
  }

  getFeather(): IState {
    console.log("Mario won 1000 points");
    return this;
  }

  takeDamage(): IState {
    console.log("Mario is now bigger.");
    return new MarioBig();
  }
}
