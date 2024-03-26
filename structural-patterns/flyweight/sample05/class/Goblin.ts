import { IMonster } from "../interface/IMonster";
import { MonsterTypes } from "../type/MonsterTypes";

export class Goblin implements IMonster {
  private readonly type: MonsterTypes;
  private readonly texture: string;
  private readonly color: string;

  constructor() {
    this.type = "Goblin";
    this.texture = "Goblin.png";
    this.color = "green";
  }

  render(x: number, y: number): void {
    console.log(
      `Render a ${this.type} of ${this.color} color at ${x}, ${y} with texture ${this.texture}`
    );
  }
}
