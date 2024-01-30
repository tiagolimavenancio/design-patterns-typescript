import { IComponent } from "../interface/IComponent";

// 2. "Isa" relationship
export abstract class Composite implements IComponent {

    // 3. Couple to interface
    private children: IComponent[] = [];
    private total = 0;
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    add(component: IComponent) {
        this.children[this.total++] = component;
    }


    traverse(): void {
        console.log(this.value + " ");
        for (let i = 0; i < this.total; i++) {
            // 4. Delegation and polymorphism
            this.children[i].traverse();
        }
    }
}