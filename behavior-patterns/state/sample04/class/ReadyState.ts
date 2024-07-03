/**
 * They can also trigger state transitions in the context.
 */

import { LockedState } from "./LockedState";
import { Player } from "./Player";
import { PlayingState } from "./PlayingState";
import { State } from "./State";

export class ReadyState extends State {
  constructor(player: Player) {
    super(player);
  }

  public onLock(): string {
    this.player.changeState(new LockedState(this.player));
    return "Locked...";
  }

  public onPlay(): string {
    const action: string = this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
    return action;
  }

  public onNext(): string {
    return "Locked...";
  }

  public onPrevious(): string {
    return "Locked...";
  }
}
