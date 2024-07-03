import { IState } from "../interface/IState";
import { MusicPlayer } from "./MusicPlayer";

export class PausedState implements IState {
  handle(context: MusicPlayer): void {
    console.log("Player is in paused state");
  }
}
