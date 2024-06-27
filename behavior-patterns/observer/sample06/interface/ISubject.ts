import { IObserver } from "./IObserver";

export interface ISubject {
  register(o: IObserver): void;
  remove(o: IObserver): void;
  notify(): void;
}
