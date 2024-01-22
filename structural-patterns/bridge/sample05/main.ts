import { Circle } from "./class/Circle";
import { Triangle } from "./class/Triangle";

import { Blue } from './class/Blue';
import { Red } from './class/Red';

function main() {
    const circle = new Circle(new Red());
    const triangle = new Triangle(new Blue());

    circle.logMe();
    triangle.logMe();
}

main();