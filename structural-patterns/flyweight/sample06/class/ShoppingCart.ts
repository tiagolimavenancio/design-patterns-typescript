import { Session } from "./Session";

export class ShoppingCart {
  private session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  addItem(item: string): void {
    console.log(`Item '${item}' added to the cart for user ${this.session.getUserId()}`);
    this.session.addAction(`Added item ${item}`);
  }
}
