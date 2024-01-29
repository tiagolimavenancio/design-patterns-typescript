import { IComponent } from "../interface/IComponent";

export abstract class Composite implements IComponent {
    protected children: IComponent[] = [];

    add(component: IComponent) {
        this.children.push(component);
    }

    remove(component: IComponent) {
        this.children.splice(this.children.indexOf(component), 1);
    }

    getChildren() {
        return this.children;
    }

    operation() {
        this.children.forEach(child => {
            child.operation();
        });
    }
}