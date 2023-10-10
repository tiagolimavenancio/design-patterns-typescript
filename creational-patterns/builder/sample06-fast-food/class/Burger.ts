import { BurgerType } from "../enum/BurgerType";

export class Burger {
  public type: BurgerType = BurgerType.NORMAL;

  public cheese = false;
  public lettuce = false;
  public tomato = false;
  public double = false;
  public onion = false;
  public pickle = false;
  public bacon = false;
  public chiliSauce = false;
  public egg = false;

  public setType(type: BurgerType) {
    this.type = type;
  }

  public setCheese() {
    this.cheese = true;
  }

  public setLettuce() {
    this.lettuce = true;
  }

  public setTomate() {
    this.tomato = true;
  }

  public setDouble() {
    this.double = true;
  }

  public setOnion() {
    this.onion = true;
  }

  public setPickle() {
    this.pickle = true;
  }

  public setBacon() {
    this.bacon = true;
  }

  public setChiliSauce() {
    this.chiliSauce = true;
  }

  public setEgg() {
    this.egg = true;
  }
}
