import { IMonster } from "../interface/IMonster";
import { MonsterTypes } from "../type/MonsterTypes";
import { Dragon } from "./Dragon";
import { Goblin } from "./Goblin";

export class FlyweightMonsterFactory {
  private cache: { [key in MonsterTypes]?: IMonster } = {};

  getMonster(type: MonsterTypes): IMonster {
    let monster = this.cache[type];

    if (!monster) {
      if (type === "Goblin") {
        monster = new Goblin();
      } else {
        monster = new Dragon();
      }

      this.cache[type] = monster;
    }

    return monster;
  }
}
