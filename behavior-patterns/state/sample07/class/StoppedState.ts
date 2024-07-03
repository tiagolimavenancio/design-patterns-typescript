import { IState } from "../interface/IState";
import { MusicPlayer } from "./MusicPlayer";

export class StoppedState implements IState {
  handle(context: MusicPlayer): void {
    console.log("Player is in stopped state");
  }
}
