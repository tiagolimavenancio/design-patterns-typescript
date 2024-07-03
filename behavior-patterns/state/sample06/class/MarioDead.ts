import { IState } from "../interface/IState";

export class MarioDead implements IState {
  getMushroom(): IState | null {
    return null;
  }

  getFlower(): IState | null {
    return null;
  }

  getFeather(): IState | null {
    return null;
  }

  takeDamage(): IState | null {
    return null;
  }
}
