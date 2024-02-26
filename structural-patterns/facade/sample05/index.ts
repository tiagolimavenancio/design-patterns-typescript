import { Point } from "./class/Point";
import { Line } from "./class/Line";

(function main() {
  const lineA = new Line(new Point(2, 4), new Point(5, 7));
  lineA.move(-2, -4);
  console.log("after move: " + lineA);

  lineA.rotate(45);
  console.log("after rotate: " + lineA);

  const lineB = new Line(new Point(2, 1), new Point(2.866, 1.5));
  lineB.rotate(30);
  console.log("30 degrees to 60 degrees: " + lineB);
})();
