export abstract class Pokemon {
  name: string;
  power: number;
  attack: number;
  defense: number;

  constructor(_pokemon: Pokemon) {
    this.name = _pokemon.name || "unknown";
    this.power = _pokemon.power || 1;
    this.attack = _pokemon.attack || 1;
    this.defense = _pokemon.defense || 1;
  }

  toString() {
    return `${this.name} - power: ${this.power}; attack: ${this.attack}; defense: ${this.defense}`;
  }

  calculateMultiplier() {
    return (1 / 2) * this.power * Math.random();
  }

  showDamage(damage: number) {
    console.log("Pokemon damage is:", damage);
  }

  abstract calculateImpact(multipliers: number): number;

  calculateDamage() {
    const multipliers = this.calculateMultiplier();
    const damage = this.calculateImpact(multipliers);
    this.showDamage(damage);
  }
}
