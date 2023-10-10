import { BurgerType } from "../enum/BurgerType";
import { Burger } from "./Burger";
import { BurgerBuilder } from "./BurgerBuilder";

export class BurgerDirector {
  constructor(private builder: BurgerBuilder) {
    this.builder = builder;
  }

  public serveRegularBurger(): Burger {
    return this.builder.setType(BurgerType.NORMAL).build();
  }

  public serveCheeseBurger(): Burger {
    return this.builder.addCheese().setType(BurgerType.CHEESE).build();
  }

  public serveVeggieBurger(): Burger {
    return this.builder.addCheese().addLettuce().addTomato().setType(BurgerType.VEGGIE).build();
  }

  public serverDoubleBurger(): Burger {
    return this.builder.setDouble().setType(BurgerType.DOUBLE).build();
  }

  public serveCheeseBaconBurger(): Burger {
    return this.builder.addCheese().addBacon().setType(BurgerType.CHEESE_BACON).build();
  }
}
