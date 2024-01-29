import { IComponent } from "../interface/IComponent";

// 2. "Isa" relationship
export class Primitive implements IComponent {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    traverse(): void {
        console.log(this.value + ' ');
    }

}