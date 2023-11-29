import { MyClass } from "./class/MyClass";

const object1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(object1)}`);

const object2 = object1.clone();
console.log(`OBJECT2: ${JSON.stringify(object2)}`);
