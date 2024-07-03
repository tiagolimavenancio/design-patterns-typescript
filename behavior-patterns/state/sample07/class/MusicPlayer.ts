import { IState } from "../interface/IState";

export class MusicPlayer {
  private state!: IState;

  constructor(state: IState) {
    this.transitionTo(state);
  }

  public transitionTo(state: IState): void {
    console.log(`MusicPlayer: Transition to ${(<any>state.constructor).name}.`);
    this.state = state;
  }

  public request(): void {
    this.state.handle(this);
  }
}
