import { Builder } from "../interface/Builder";

export class Director {
  public createHero(heroBuilder: Builder) {
    heroBuilder.setArmor();
    heroBuilder.setSkills();
    heroBuilder.setWeapon();

    return heroBuilder.build();
  }

  public createHeroBasic(heroBuilder: Builder) {
    return heroBuilder.build();
  }

  public createHeroWithArmor(heroBuilder: Builder) {
    heroBuilder.setArmor();
    return heroBuilder.build();
  }
}
