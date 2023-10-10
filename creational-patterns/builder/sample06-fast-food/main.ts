import { Burger } from "./class/Burger";
import { BurgerBuilder } from "./class/BurgerBuilder";
import { BurgerDirector } from "./class/BurgerDirector";

function main() {
  let burger: Burger = null;
  const burgerType = Math.round(Math.random() * 6);

  const burgerBuilder = new BurgerBuilder();
  const burgerDirector = new BurgerDirector(burgerBuilder);

  switch (burgerType) {
    case 1:
      burger = burgerDirector.serveRegularBurger();
      break;
    case 2:
      burger = burgerDirector.serveCheeseBurger();
      break;
    case 3:
      burger = burgerDirector.serveVeggieBurger();
      break;
    case 4:
      burger = burgerDirector.serverDoubleBurger();
      break;
    case 5:
      burger = burgerDirector.serveCheeseBaconBurger();
      break;
    default:
      burger = burgerDirector.serveRegularBurger();
      break;
  }

  console.log({ burger });
}

main();
