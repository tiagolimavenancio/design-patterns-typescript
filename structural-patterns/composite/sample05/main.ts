import { DiscountedProduct } from "./class/DiscountedProduct";
import { Product } from "./class/Product";
import { ProductContainer } from "./class/ProductContainer";

(function main() {
    const laptop = new Product(300);
    const phone = new DiscountedProduct(200, 50);

    const smallBox = new ProductContainer();
    smallBox.add(laptop);

    // Output: Total price of small Box: 300
    console.log("Total price of small Box:", smallBox.getPrice());

    const bigBox = new ProductContainer();
    bigBox.add(phone);
    bigBox.add(smallBox);

    // Output: Total price of big Box: 450
    console.log("Total price of big Box:", bigBox.getPrice());
})();