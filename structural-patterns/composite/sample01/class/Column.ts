import { Composite } from "./Composite";

export class Column extends Composite {
    constructor(value: number) {
        super(value);
    }

    traverse(): void {
        super.traverse();
    }
}