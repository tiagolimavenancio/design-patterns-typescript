import { IColor } from "../interface/IColor";
import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(color: IColor) {
        super(color);
    }

    logMe() {
        console.log(`I am a ${this.color.log()} circle.`);
    }
}