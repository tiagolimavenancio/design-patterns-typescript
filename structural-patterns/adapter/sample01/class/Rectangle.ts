export class Rectangle {
  draw(x: number, y: number, width: number, height: number): void {
    console.log(
      `Rectangle with coordinate left-down point (${x},${y}), width: ${width} and height: ${height}.`
    );
  }
}
