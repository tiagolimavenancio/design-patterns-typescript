import { Column } from "./class/Column";
import { Composite } from "./class/Composite";
import { Primitive } from "./class/Primitive";
import { Row } from "./class/Row";

(function main() {
    const first: Composite = new Row(1);
    const second: Composite = new Column(2);
    const third: Composite = new Column(3);
    const fourth: Composite = new Row(4);
    const fifth: Composite = new Row(5);

    first.add(second);
    first.add(third);

    third.add(fourth);
    third.add(fifth);

    first.add(new Primitive(6));
    second.add(new Primitive(7));
    third.add(new Primitive(8));
    fourth.add(new Primitive(9));
    fifth.add(new Primitive(10));

    first.traverse();
})();
