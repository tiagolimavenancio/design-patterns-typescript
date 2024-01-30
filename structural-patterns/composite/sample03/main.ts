import { CompositeComponent } from "./class/CompositeComponent";

type HouseComponent = {
    color: string;
};

(function main() {
    const myHouse: CompositeComponent<HouseComponent> = new CompositeComponent('My House');
    myHouse.addChild(new CompositeComponent('My Bedrooms'));

    console.log(myHouse.children[0].name);
})();