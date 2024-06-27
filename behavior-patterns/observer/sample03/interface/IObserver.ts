import { ISubject } from "./ISubject";

/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface IObserver {
  update(subject: ISubject): void;
}
