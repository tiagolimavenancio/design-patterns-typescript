import { IState } from "../interface/IState";
import { MusicPlayer } from "./MusicPlayer";

export class PlayingState implements IState {
  handle(context: MusicPlayer): void {
    console.log("Player is in playing state");
  }
}
