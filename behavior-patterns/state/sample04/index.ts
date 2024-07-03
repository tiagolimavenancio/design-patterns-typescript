import { Player } from "./class/Player";
import { UI } from "./class/UI";

(function main() {
  const player = new Player();
  const ui = new UI(player);

  ui.init();
})();
