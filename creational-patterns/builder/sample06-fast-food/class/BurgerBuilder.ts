import { BurgerType } from "../enum/BurgerType";
import { Burger } from "./Burger";

export class BurgerBuilder {
  private burger: Burger;

  constructor() {
    this.burger = new Burger();
  }

  public setType(type: BurgerType): BurgerBuilder {
    this.burger.setType(type);
    return this;
  }

  public setDouble(): BurgerBuilder {
    this.burger.setDouble();
    return this;
  }

  public addCheese(): BurgerBuilder {
    this.burger.setCheese();
    return this;
  }

  public addLettuce(): BurgerBuilder {
    this.burger.setLettuce();
    return this;
  }

  public addTomato(): BurgerBuilder {
    this.burger.setTomate();
    return this;
  }

  public addOnion(): BurgerBuilder {
    this.burger.setOnion();
    return this;
  }

  public addPickle(): BurgerBuilder {
    this.burger.setPickle();
    return this;
  }

  public addBacon(): BurgerBuilder {
    this.burger.setBacon();
    return this;
  }

  public addChiliSauce(): BurgerBuilder {
    this.burger.setChiliSauce();
    return this;
  }

  public addEgg(): BurgerBuilder {
    this.burger.setEgg();
    return this;
  }

  build(): Burger {
    return this.burger;
  }
}
