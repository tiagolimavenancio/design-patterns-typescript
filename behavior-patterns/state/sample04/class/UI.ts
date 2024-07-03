import { Player } from "./Player";

export class UI {
  private textField: string = "";
  private player!: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public init(): void {
    console.log("Application is initialized!!!");

    const play = {
      text: "Play",
      action: () => (this.textField = this.player.getState().onPlay()),
    };

    const stop = {
      text: "Stop",
      action: () => (this.textField = this.player.getState().onLock()),
    };

    const next = {
      text: "Next",
      action: () => (this.textField = this.player.getState().onNext()),
    };

    const prev = {
      text: "Prev",
      action: () => (this.textField = this.player.getState().onPrevious()),
    };

    play.action();
    console.log(`Button '${play.text}' clicked, textField: ${this.textField}`);

    stop.action();
    console.log(`Button '${stop.text}' clicked, textField: ${this.textField}`);

    next.action();
    console.log(`Button '${next.text}' clicked, textField: ${this.textField}`);

    prev.action();
    console.log(`Button '${prev.text}' clicked, textField: ${this.textField}`);
  }
}
