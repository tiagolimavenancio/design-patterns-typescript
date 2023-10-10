import { Builder } from "../interface/Builder";
import { Hero } from "./Hero";

export class OrcHeroBuilder extends Builder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.hero = new Hero();
    this.hero.race = "Orc";
  }

  public setArmor(): void {
    this.hero.armor = "Leather";
  }

  public setWeapon(): void {
    this.hero.weapon = "Axe";
  }

  public setSkills(): void {
    this.hero.skills = ["Berserk", "Stun"];
  }

  build(): Hero {
    const hero = this.hero;
    this.reset();
    return hero;
  }
}
