import { Composite } from './class/Composite';
import { Leaf } from './class/Leaf';

(function main() {
    const simple = new Leaf();
    console.log(simple.operation());

    const tree = new Composite();
    const branch1 = new Composite();

    branch1.add(new Leaf());
    branch1.add(new Leaf());

    const branch2 = new Composite();
    branch2.add(new Leaf());

    tree.add(branch1);
    tree.add(branch2);

    tree.operation();

})();
