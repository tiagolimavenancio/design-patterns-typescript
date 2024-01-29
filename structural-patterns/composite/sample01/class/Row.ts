import { Composite } from './Composite';

export class Row extends Composite {
    constructor(value: number) {
        super(value);
    }

    traverse(): void {
        super.traverse();
    }
}