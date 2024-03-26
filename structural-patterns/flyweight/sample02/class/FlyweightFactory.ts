import { Sprite } from "./Sprite";
import { SpriteFlyweight } from "./SpriteFlyweight";

export enum Sprites {
  JOGADOR,
  INIMIGO_1,
  INIMIGO_2,
  INIMIGO_3,
  CENARIO_1,
  CENARIO_2,
}

export class FlyweightFactory {
  protected flyweights: SpriteFlyweight[] = [];

  constructor() {
    this.flyweights = new Array();
    this.flyweights.push(new Sprite("heroi.png"));
    this.flyweights.push(new Sprite("inimigo1.png"));
    this.flyweights.push(new Sprite("inimigo2.png"));
    this.flyweights.push(new Sprite("inimigo3.png"));
    this.flyweights.push(new Sprite("cenario1.png"));
    this.flyweights.push(new Sprite("cenario2.png"));
  }

  public getFlyweight(key: Sprites): SpriteFlyweight {
    switch (key) {
      case Sprites.JOGADOR:
        return this.flyweights[0];
      case Sprites.INIMIGO_1:
        return this.flyweights[1];
      case Sprites.INIMIGO_2:
        return this.flyweights[2];
      case Sprites.INIMIGO_3:
        return this.flyweights[3];
      case Sprites.CENARIO_1:
        return this.flyweights[4];
      case Sprites.CENARIO_2:
        return this.flyweights[5];
      default:
        throw new Error("Flyweight not fount!!!");
    }
  }
}
