import { IVisitor } from "../interface/IVisitor";
import { Bar } from "./Bar";
import { Baz } from "./Baz";
import { Foo } from "./Foo";

export class UpVisitor implements IVisitor {
  visitFoo(foo: Foo): void {
    console.log("do up on " + foo.getFoo());
  }

  visitBar(bar: Bar): void {
    console.log("do up on " + bar.getBar());
  }

  visitBaz(baz: Baz): void {
    console.log("do up on " + baz.getBaz());
  }
}
