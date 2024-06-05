import { NonNullList } from "../class/NonNullList";
import { NullList } from "../class/NullList";

export interface IListVisitor {
  whenNonNullList(host: NonNullList, params: object): object;
  whenNullList(host: NullList, params: object): object;
}
