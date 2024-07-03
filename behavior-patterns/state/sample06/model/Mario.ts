import { IState } from "../interface/IState";
import { MarioSmall } from "../class/MarioSmall";

export class Mario {
  protected state!: IState | null;

  constructor() {
    this.state = new MarioSmall();
  }

  getMushroom(): void {
    if (this.state) {
      this.state = this.state.getMushroom();
    }
  }

  getFlower() {
    if (this.state) {
      this.state = this.state.getFlower();
    }
  }

  getFeather() {
    if (this.state) {
      this.state = this.state.getFeather();
    }
  }

  takeDamage() {
    if (this.state) {
      this.state = this.state.takeDamage();
    }
  }
}
