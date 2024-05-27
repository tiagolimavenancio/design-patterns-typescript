import { Memento } from "./Memento";

export class GameCharacter {
  private _score: number;
  private _inventory: Set<string>;
  private _level: number;
  private _location: { x: number; y: number; z: number };

  constructor() {
    this._score = 0;
    this._inventory = new Set();
    this._level = 0;
    this._location = { x: 0, y: 0, z: 0 };
  }

  public get score(): number {
    return this._score;
  }

  registerKill() {
    this._score += 100;
  }

  addInventory(item: string) {
    this._inventory.add(item);
  }

  progressToNextLevel() {
    this._level = this._level + 1;
  }

  moveForward(amount: number) {
    this._location["z"] += amount;
  }

  status(): string {
    return `Score: ${this._score}, Level: ${this._level}, Location: ${JSON.stringify(
      this._location
    )}\n + Inventory: ${JSON.stringify(Array.from(this._inventory))}`;
  }

  public get memento(): Memento {
    return new Memento(
      this.score,
      new Set(this._inventory),
      this._level,
      Object.assign({}, this._location)
    );
  }

  public set memento(value: Memento) {
    this._score = value.score;
    this._inventory = value.inventory;
    this._level = value.level;
    this._location = value.location;
  }
}
