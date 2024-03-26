import { IMonster } from "../interface/IMonster";
import { MonsterTypes } from "../type/MonsterTypes";

export class Dragon implements IMonster {
  private readonly type: MonsterTypes;
  private readonly texture: string;
  private readonly color: string;

  constructor() {
    this.type = "Dragon";
    this.texture = "Dragon.png";
    this.color = "red";
  }

  render(x: number, y: number): void {
    console.log(
      `Render a ${this.type} of ${this.color} color at ${x}, ${y} with texture ${this.texture}`
    );
  }
}
