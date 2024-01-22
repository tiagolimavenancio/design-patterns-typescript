import { Android } from "./class/Android";
import { AndroidAdapter } from "./class/AndroidAdapter";
import { Namekian } from "./class/Namekian";
import { Saiyan } from "./class/Saiyan";

function main() {
  const goku = new Saiyan();
  const vegeta = new Saiyan();
  const piccollo = new Namekian();

  const C17 = new AndroidAdapter(new Android());

  console.log(goku.attack());
  console.log(vegeta.attack());
  console.log(piccollo.attack());
  console.log(C17.attack());
}

main();
