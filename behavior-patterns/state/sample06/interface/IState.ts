export interface IState {
  getMushroom(): IState | null;
  getFlower(): IState | null;
  getFeather(): IState | null;
  takeDamage(): IState | null;
}
