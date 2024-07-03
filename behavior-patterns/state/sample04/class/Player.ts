import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class Player {
  private state: State;
  private playing: boolean = false;
  private playlist: Array<string> = new Array<string>();
  private currentTrack: number = 0;

  constructor() {
    this.state = new ReadyState(this);
    this.setPlaying(true);

    for (let i = 0; i <= 12; i++) {
      this.playlist.push("Track " + i);
    }
  }

  public changeState(state: State): void {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  public setPlaying(playing: boolean): void {
    this.playing = playing;
  }

  public isPlaying(): boolean {
    return this.playing;
  }

  public startPlayback(): string {
    return "Playback " + this.playlist[this.currentTrack];
  }

  public nextTrack(): string {
    this.currentTrack++;
    if (this.currentTrack > this.playlist.length - 1) {
      this.currentTrack = 0;
    }

    return "Playing " + this.playlist[this.currentTrack];
  }

  public previousTrack(): string {
    this.currentTrack--;
    if (this.currentTrack < 0) {
      this.currentTrack = this.playlist.length - 1;
    }

    return "Playing " + this.playlist[this.currentTrack];
  }

  public setCurrentTrackAfterStop(): void {
    this.currentTrack = 0;
  }
}
