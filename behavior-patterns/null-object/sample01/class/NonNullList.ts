import { IListVisitor } from "../interface/IListVisitor";
import { List } from "./List";

export class NonNullList extends List {
  private head: object;
  private tail: List;

  constructor(head: object, tail: List) {
    super();

    this.head = head;
    this.tail = tail;
  }

  public getHead(): object {
    return this.head;
  }

  public getTail(): List {
    return this.tail;
  }

  accept(visitor: IListVisitor, params: object): object {
    return visitor.whenNonNullList(this, params);
  }
}
