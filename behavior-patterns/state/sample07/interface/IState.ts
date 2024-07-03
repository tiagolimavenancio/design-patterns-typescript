import { MusicPlayer } from "../class/MusicPlayer";

export interface IState {
  handle(context: MusicPlayer): void;
}
