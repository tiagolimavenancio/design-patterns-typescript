import { IVisitor } from "../interface/IVisitor";
import { Bar } from "./Bar";
import { Baz } from "./Baz";
import { Foo } from "./Foo";

export class DownVisitor implements IVisitor {
  visitFoo(foo: Foo): void {
    console.log("do down on " + foo.getFoo());
  }

  visitBar(bar: Bar): void {
    console.log("do down on " + bar.getBar());
  }

  visitBaz(baz: Baz): void {
    console.log("do down on " + baz.getBaz());
  }
}
