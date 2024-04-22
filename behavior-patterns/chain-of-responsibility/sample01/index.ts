import { IImage } from "./interface/IImage";
import { IR } from "./class/IR";
import { LS } from "./class/LS";
import { Processor } from "./class/Processor";

(function main() {
  const inputImages: IImage[] = [new IR(), new IR(), new LS(), new LS()];
  const processors: Processor[] = [new Processor(), new Processor(), new Processor()];

  for (let i = 0, j = 0; i < inputImages.length; i++) {
    console.log("Operation #" + (i + 1) + ":");

    j = 0;
    while (!processors[j].execute(inputImages[i])) {
      j = (j + 1) % processors.length;
    }

    console.log("");
  }
})();
