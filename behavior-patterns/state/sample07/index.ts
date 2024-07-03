import { MusicPlayer } from "./class/MusicPlayer";
import { StoppedState } from "./class/StoppedState";
import { PlayingState } from "./class/PlayingState";
import { PausedState } from "./class/PausedState";

(function main() {
  const musicPlayer = new MusicPlayer(new StoppedState());

  musicPlayer.request(); // Stopped state

  musicPlayer.transitionTo(new PlayingState());
  musicPlayer.request(); // Playing state

  musicPlayer.transitionTo(new PausedState());
  musicPlayer.request(); // Paused state
})();
