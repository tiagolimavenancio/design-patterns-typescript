export type PokemonType = {
  name: string;
  power: number;
  attack: number;
  defense: number;
};

export abstract class Pokemon {
  name: string;
  power: number;
  attack: number;
  defense: number;

  constructor(pokemon: PokemonType) {
    this.name = pokemon.name;
    this.power = pokemon.power;
    this.attack = pokemon.attack;
    this.defense = pokemon.defense;
  }

  toString(): string {
    return `${this.name} has ${this.power} power, ${this.attack} attack and ${this.defense} defense.`;
  }

  calculateMultiplier(): number {
    return (1 / 2) * this.power * Math.random();
  }

  showDamage(damage: number) {
    console.log(`${this.name} has received ${damage} damage.`);
  }

  calculateDamage() {
    const multipliers = this.calculateMultiplier();
    const damage = this.calculateImpact(multipliers);
    this.showDamage(damage);
  }

  abstract calculateImpact(multipliers: number): number;
}
