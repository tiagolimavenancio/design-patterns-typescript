import { IVisitor } from "./IVisitor";

/**
 * The Component interface declares an `accept` method that should take the base
 * visitor interface as an argument.
 */
export interface IComponent {
  accept(visitor: IVisitor): void;
}
