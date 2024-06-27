import { IObserver } from "./IObserver";

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}
