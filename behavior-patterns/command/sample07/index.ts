import { Cart } from "./model/Cart";
import { Item } from "./model/Item";
import { AddToCartCommand } from "./class/AddToCartCommand";
import { RemoveFromCartCommand } from "./class/RemoveFromCartCommand";
import { ModifyCartItemCommand } from "./class/ModifyCartItemCommand";

(function main() {
  const cart = new Cart();
  const book = new Item(1, "Book", 10, 3);
  const movie = new Item(2, "Movie", 20, 2);

  const addBookCommand = new AddToCartCommand(cart, book);
  const removeBookCommand = new RemoveFromCartCommand(cart, book);
  const modifyBookCommand = new ModifyCartItemCommand(cart, book, 2);
  const addMovieCommand = new AddToCartCommand(cart, movie);

  addBookCommand.execute(); // cart now contains book
  addMovieCommand.execute(); // cart now contains book and movie
  removeBookCommand.execute(); // cart now contains only movie
  addMovieCommand.undo(); // cart is empty
  removeBookCommand.undo(); // cart now again contains book
  modifyBookCommand.execute(); // cart now contains 2 books
  modifyBookCommand.undo(); // cart now again contains only 1 book
})();
