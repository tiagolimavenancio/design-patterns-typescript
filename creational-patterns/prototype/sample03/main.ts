import { Shape } from "./class/Shape";
import { Circle } from "./class/Circle";
import { Rectangle } from "./class/Rectangle";

function cloneAndCompare(shapes: Array<Shape>, shapesCopy: Array<Shape>): void {
  for (const shape of shapes) {
    shapesCopy.push(shape.clone());
  }

  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i] !== shapesCopy[i]) {
      console.log(i + ": Shapes are different objects (yay!)");

      if (shapes[i] === shapesCopy[i]) {
        console.log(i + ": Shape objects are the same (booo!)");
      } else {
        console.log(i + ": Shape objects are different (yay!)");
      }
    } else {
      console.log(i + ": Shape objects are the same (booo!)");
    }
  }
}

function main() {
  const shapes = new Array<Shape>();
  const shapesCopy = new Array<Shape>();

  const circle = new Circle();
  circle.x = 10;
  circle.y = 20;
  circle.radius = 15;
  circle.color = "red";
  shapes.push(circle);

  const anotherCircle = this.circle.clone() as Circle;
  shapes.push(anotherCircle);

  const rectangle = new Rectangle();
  rectangle.x = 10;
  rectangle.y = 20;
  rectangle.width = 15;
  rectangle.height = 15;
  rectangle.color = "red";
  shapes.push(rectangle);

  cloneAndCompare(shapes, shapesCopy);
}

main();
