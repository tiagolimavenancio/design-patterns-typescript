import { IProductComponent } from "../interface/IProductComponent";

export class ProductContainer implements IProductComponent {
    private children: IProductComponent[] = [];

    add(component: IProductComponent) {
        this.children.push(component);
    }

    getPrice(): number {
        return this.children.reduce((total, child) => total + child.getPrice(), 0);
    }
}