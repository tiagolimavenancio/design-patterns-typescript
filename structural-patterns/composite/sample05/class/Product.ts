import { IProductComponent } from "../interface/IProductComponent";

export class Product implements IProductComponent {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}