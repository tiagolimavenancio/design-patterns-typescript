import { IColor } from "../interface/IColor";

export abstract class Shape {
    color: IColor;

    constructor(color: IColor) {
        this.color = color;
    }

    logMe() {
        console.log(`I am a ${this.color.log()} shape.`);
    }
}