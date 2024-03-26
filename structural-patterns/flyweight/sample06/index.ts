import { SessionManager } from "./class/SessionManager";
import { ShoppingCart } from "./class/ShoppingCart";

(function main() {
  const sessionManager = new SessionManager();

  /*
    Item 'Laptop' added to the cart for user user1
    Item 'Headphones' added to the cart for user user1
    User 1 Actions: [ 'Added item: Laptop', 'Added item: Headphones' ]
  */

  const userSession1 = sessionManager.getSessions("user1");
  const shoppingCartUser1 = new ShoppingCart(userSession1);
  shoppingCartUser1.addItem("Laptop");
  shoppingCartUser1.addItem("Headphones");

  console.log("User 1 Actions:", userSession1.getActions());

  /*
    Item 'Smartphone' added to the cart for user user2
    User 2 Actions: [ 'Added item: Smartphone' ]
  */

  const userSession2 = sessionManager.getSessions("user2");
  const shoppingCartUser2 = new ShoppingCart(userSession2);
  shoppingCartUser2.addItem("Smartphone");

  console.log("User 2 Actions:", userSession2.getActions());
})();
