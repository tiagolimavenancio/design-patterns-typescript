import { FlyweightFactory, Sprites } from "./class/FlyweightFactory";
import { Point } from "./class/Point";

(function main() {
  const factory = new FlyweightFactory();

  factory.getFlyweight(Sprites.CENARIO_1).draw(new Point(0, 0));

  factory.getFlyweight(Sprites.JOGADOR).draw(new Point(10, 10));

  factory.getFlyweight(Sprites.INIMIGO_1).draw(new Point(100, 10));
  factory.getFlyweight(Sprites.INIMIGO_2).draw(new Point(120, 10));
  factory.getFlyweight(Sprites.INIMIGO_3).draw(new Point(140, 10));

  factory.getFlyweight(Sprites.INIMIGO_2).draw(new Point(60, 10));
  factory.getFlyweight(Sprites.INIMIGO_2).draw(new Point(50, 10));
  factory.getFlyweight(Sprites.INIMIGO_3).draw(new Point(170, 10));
})();
