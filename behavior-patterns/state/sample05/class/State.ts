import { Freeza } from "../model/Freeza";

export abstract class State {
  abstract power: number;
  abstract energy: number;

  protected freeza!: Freeza;

  public setFreeza(freeza: Freeza) {
    this.freeza = freeza;
  }

  public getEnergy(): number {
    return this.energy;
  }

  public abstract attack(): void;
  public abstract defend(attack: number): void;
}
