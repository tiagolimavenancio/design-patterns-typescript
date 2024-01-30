import { IProductComponent } from "../interface/IProductComponent";

export class DiscountedProduct implements IProductComponent {
    private price: number;
    private discount: number;

    constructor(price: number, discount: number) {
        this.price = price;
        this.discount = discount;
    }

    getPrice(): number {
        return this.price - this.discount;
    }
}