import { PointCartesian } from "./PointCartesian";
import { PointPolar } from "./PointPolar";

export class Point {
  private pointCartesian: PointCartesian;

  constructor(x: number, y: number) {
    this.pointCartesian = new PointCartesian(x, y);
  }

  move(x: number, y: number): void {
    this.pointCartesian.move(x, y);
  }

  rotate(angle: number, o: Point): void {
    const x: number = this.pointCartesian.getX() - o.pointCartesian.getX();
    const y: number = this.pointCartesian.getY() - o.pointCartesian.getY();

    const pointPolar: PointPolar = new PointPolar(
      Math.sqrt(x * x + y * y),
      (Math.atan2(x, y) * 180) / Math.PI
    );
    pointPolar.rotate(angle);

    console.log("PointPolar is " + pointPolar);

    const str = pointPolar.toString();
    const i = str.indexOf("@");

    const r = parseFloat(str.substring(1, i));
    const a = parseFloat(str.substring(i + 1, str.length - 1));

    this.pointCartesian = new PointCartesian(
      r * Math.cos((a * Math.PI) / 180) + o.pointCartesian.getX(),
      r * Math.sin((a * Math.PI) / 180) + o.pointCartesian.getY()
    );
  }

  toString(): string {
    return this.pointCartesian.toString();
  }
}
