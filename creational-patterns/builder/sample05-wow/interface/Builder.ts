import { Hero } from "../class/Hero";

export abstract class Builder {
  protected hero: Hero;

  public abstract setArmor(): void;
  public abstract setWeapon(): void;
  public abstract setSkills(): void;

  public abstract build(): Hero;
}
