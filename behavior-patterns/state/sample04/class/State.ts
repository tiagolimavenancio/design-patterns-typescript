import { Player } from "./Player";

/**
 * Common interface for all states.
 */
export abstract class State {
  public player!: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public abstract onLock(): string;
  public abstract onPlay(): string;
  public abstract onNext(): string;
  public abstract onPrevious(): string;
}
