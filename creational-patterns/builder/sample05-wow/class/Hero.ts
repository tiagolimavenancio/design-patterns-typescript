export class Hero {
  race: string;
  armor: string;
  weapon: string;
  skills: string[];

  toString(): string {
    return `Race: ${this.race}, Armor: ${this.armor}, Weapon: ${
      this.weapon
    }, Skills: ${this.skills.join(", ")}`;
  }
}
