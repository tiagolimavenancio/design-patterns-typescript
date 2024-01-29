import { ICompositeComponent } from "../interface/ICompositeComponent";

export class CompositeComponent<T> implements ICompositeComponent<T> {
    children: ICompositeComponent<T>[];
    name: string;
    props?: T;

    constructor(name: string, props?: T) {
        this.children = [];
        this.name = name;
        this.props = props;
    }

    addChild(...comps: ICompositeComponent<T>[]): boolean {
        comps.forEach(c => this.children.push(c));
        return true;
    }

    traverse(fn: (ICompositeComponent) => void) {
        if (this.children.length > 0) {
            this.children.forEach(c => c.traverse(fn));
        }

        fn(this);
    }
}