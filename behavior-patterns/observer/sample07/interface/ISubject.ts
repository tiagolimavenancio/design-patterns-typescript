import { IObserver } from "./IObserver";

export interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notify(): void;
}
