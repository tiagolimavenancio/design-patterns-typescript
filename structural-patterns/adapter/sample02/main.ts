import { RoundHole } from "./class/RoundHole";
import { SquarePegAdapter } from "./class/SquarePegAdapter";

function main() {
  const roundHole = new RoundHole(5);

  for (let i = 6; i < 10; i++) {
    const squarePegAdapter = new SquarePegAdapter(i);
    squarePegAdapter.makeFit(roundHole);
  }
}

main();
