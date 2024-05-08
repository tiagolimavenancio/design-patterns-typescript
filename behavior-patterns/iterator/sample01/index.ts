import { WordsCollection } from "./class/WordsCollection";

(function main() {
  const collection = new WordsCollection();
  collection.addItem("First");
  collection.addItem("Second");
  collection.addItem("Third");

  const iterator = collection.getIterator();

  while (iterator.valid()) {
    console.log(iterator.next());
  }

  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
})();
