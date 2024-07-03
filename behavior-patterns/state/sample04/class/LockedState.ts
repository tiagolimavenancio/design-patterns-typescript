import { Player } from "./Player";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class LockedState extends State {
  constructor(player: Player) {
    super(player);
    player.setPlaying(false);
  }

  public onLock(): string {
    if (this.player.isPlaying()) {
      this.player.changeState(new ReadyState(this.player));
      return "Stop Playing";
    } else {
      return "Locked...";
    }
  }

  public onPlay(): string {
    this.player.changeState(new ReadyState(this.player));
    return "Ready";
  }

  public onNext(): string {
    return "Locked...";
  }

  public onPrevious(): string {
    return "Locked...";
  }
}
