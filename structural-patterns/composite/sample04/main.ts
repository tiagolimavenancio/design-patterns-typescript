import { Duck } from './class/Duck';
import { DuckFly } from "./class/DuckFly";
import { DuckVoice } from "./class/DuckVoice";
import { Wing } from "./class/Wing";

(function main() {
    const wings = [new Wing(), new Wing()];
    const flyAbility = new DuckFly().add(wings[0]).add(wings[1]);
    const voiceAbility = new DuckVoice();

    const duck = new Duck([flyAbility, voiceAbility]);

    duck.operation();
})();