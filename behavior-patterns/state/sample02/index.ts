import { FSM } from "./class/FSM";

(function main() {
  const fsm = new FSM();
  const msgs = [2, 1, 2, 1, 0, 2, 0, 0];

  for (const msg of msgs) {
    if (msg === 0) {
      fsm.on();
    } else if (msg === 1) {
      fsm.off();
    } else {
      fsm.ack();
    }
  }
})();
