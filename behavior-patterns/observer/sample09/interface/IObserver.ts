import { ISubject } from "./ISubject";

export interface IObserver<T> {
  update(subject: ISubject<T>, data: T): void;
}
