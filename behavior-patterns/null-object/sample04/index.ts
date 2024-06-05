import { IItem } from "./interface/IItem";
import { ItemReal } from "./class/ItemReal";
import { ItemNull } from "./class/ItemNull";

function getItemById(id: number): IItem {
  if (id === 1) {
    return new ItemReal("Pencil", 10);
  } else {
    return new ItemNull();
  }
}

(function main() {
  const item = getItemById(1);

  console.log({ item });

  if (item instanceof ItemReal) {
    console.log(item.getDescription());
  } else {
    console.log(item.getDescription());
  }
})();
