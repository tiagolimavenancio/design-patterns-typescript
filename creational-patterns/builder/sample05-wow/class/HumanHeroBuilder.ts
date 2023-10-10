import { Builder } from "../interface/Builder";
import { Hero } from "./Hero";

export class HumanHeroBuilder extends Builder {
  constructor() {
    super();
    this.reset();
  }

  public reset() {
    this.hero = new Hero();
    this.hero.race = "Human";
  }

  public setArmor(): void {
    this.hero.armor = "Leather";
  }

  public setWeapon(): void {
    this.hero.weapon = "Sword";
  }

  public setSkills(): void {
    this.hero.skills = ["Swordsmanship", "Bow and Arrow"];
  }

  build(): Hero {
    const hero = this.hero;
    this.reset();
    return hero;
  }
}
