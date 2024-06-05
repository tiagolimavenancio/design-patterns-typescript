import { IListVisitor } from "../interface/IListVisitor";

export abstract class List {
  abstract getTail(): List;
  abstract accept(visitor: IListVisitor, params: object): object;
}
