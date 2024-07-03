import { LockedState } from "./LockedState";
import { Player } from "./Player";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class PlayingState extends State {
  constructor(player: Player) {
    super(player);
  }

  public onLock(): string {
    this.player.changeState(new LockedState(this.player));
    this.player.setCurrentTrackAfterStop();
    return "Stop playing";
  }

  public onPlay(): string {
    this.player.changeState(new ReadyState(this.player));
    return "Paused...";
  }

  public onNext(): string {
    return this.player.nextTrack();
  }

  public onPrevious(): string {
    return this.player.previousTrack();
  }
}
