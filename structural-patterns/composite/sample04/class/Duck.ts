import { IComponent } from "../interface/IComponent";
import { Composite } from "./Composite";

export class Duck extends Composite {
    constructor(children: IComponent[]) {
        super();
        this.children = children;
    }
}