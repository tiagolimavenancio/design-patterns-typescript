import { IListVisitor } from "../interface/IListVisitor";
import { List } from "./List";

export class NullList extends List {
  private static instance: NullList = new NullList();

  private constructor() {
    super();
  }

  public static getInstance(): NullList {
    return NullList.instance;
  }

  getTail(): List {
    return this;
  }

  accept(visitor: IListVisitor, params: object): object {
    return visitor.whenNullList(this, params);
  }
}
