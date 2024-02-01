import { CharacterDecorator } from "./class/CharacterDecorator";
import { Human } from "./class/Human";
import { WhiteWalkerDecorator } from "./class/WhiteWalkerDecorator";

const NUM_HUMANS = 150;
const humans = Array.from(
  Array(NUM_HUMANS),
  (_, index) => new CharacterDecorator(new Human(`Human ${index + 1}`))
);

function createNightKing() {
  const nightKing = new WhiteWalkerDecorator(new Human("Night King"));
  nightKing.setLife(500);
  nightKing.setPower(2);
  return nightKing;
}

function isWarFinished(humans: CharacterDecorator[], whiteWalkers: WhiteWalkerDecorator[]) {
  return humans.length === 0 || whiteWalkers.length === 0;
}

function log(human: CharacterDecorator, whiteWalker: WhiteWalkerDecorator) {
  console.log("---------------");
  console.log(`${human.toString()} Vs ${whiteWalker.toString()}`);
  console.log();
  console.log("---------------");
}

(function main() {
  console.log("The War started!");

  const nightKing = createNightKing();
  const whiteWalkers = [nightKing];

  let human;
  let whiteWalker;

  while (!isWarFinished(humans, whiteWalkers)) {
    human = humans.pop();
    whiteWalker = whiteWalkers.pop();

    while (human.isAlive() && whiteWalker.isAlive()) {
      whiteWalker.receiveHit(human.attack());
      human.receiveHit(whiteWalker.attack());
    }

    if (human.isAlive()) {
      console.log("Human Win!");
      log(human, whiteWalker);
      humans.push(human);
    }

    if (whiteWalker.isAlive()) {
      console.log("WhiteWalker Win!....");
      whiteWalkers.push(whiteWalker);
      console.log("...Human is now a White Walker:", human.getName());
      whiteWalkers.push(new WhiteWalkerDecorator(new Human(`White Walker: ${human.getName()}`)));
    }

    console.log("-----WhiteWalkers------");
    console.table(whiteWalkers);
    console.log("-----Humans------");
    console.table(humans);
  }

  console.log("The War is finished");
})();
