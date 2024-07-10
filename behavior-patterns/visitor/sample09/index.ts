import { Book } from "./class/Book";
import { Electronic } from "./class/Electronic";
import { ShoppingCart } from "./class/ShoppingCart";
import { WeekdayVisitor } from "./class/WeekdayVisitor";
import { WeekendVisitor } from "./class/WeekendVisitor";

(function main() {
  const cart = new ShoppingCart();

  cart.addItem(new Book(5));
  cart.addItem(new Book(10));
  cart.addItem(new Electronic(100, 12));

  const weekdayVisitor = new WeekdayVisitor();
  const weekdayTotalPrice = cart.getTotalPrice(weekdayVisitor);
  console.log({ weekdayTotalPrice });

  const weekendVisitor = new WeekendVisitor();
  const weekendTotalPrice = cart.getTotalPrice(weekendVisitor);
  console.log({ weekendTotalPrice });
})();
