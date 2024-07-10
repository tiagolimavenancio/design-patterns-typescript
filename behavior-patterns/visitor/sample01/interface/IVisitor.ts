import { Foo } from "../class/Foo";
import { Bar } from "../class/Bar";
import { Baz } from "../class/Baz";

export interface IVisitor {
  visitFoo(foo: Foo): void;
  visitBar(bar: Bar): void;
  visitBaz(baz: Baz): void;
}
