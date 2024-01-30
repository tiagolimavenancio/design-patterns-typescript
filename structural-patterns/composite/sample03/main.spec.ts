import { CompositeComponent } from "./class/CompositeComponent";

type HouseComponent = {
    color: string;
};

describe('Composite Pattern', () => {
    it('should correctly add a component to the children list', () => {
        const myHouse: CompositeComponent<HouseComponent> = new CompositeComponent('My House');

        myHouse.addChild(new CompositeComponent('My Bedroom'));

        expect(myHouse.children[0].name).toBe('My Bedroom');
    });

    it('hould iterate over the full composite children-first', () => {
        const myHouse: CompositeComponent<HouseComponent> = new CompositeComponent("My House");
        const myBedroom: CompositeComponent<HouseComponent> = new CompositeComponent('My bedroom');
        const myLivingroom: CompositeComponent<HouseComponent> = new CompositeComponent('My livingroom');

        myBedroom.addChild(
            new CompositeComponent<HouseComponent>("My bed", { color: "white" })
        );

        myLivingroom.addChild(
            new CompositeComponent<HouseComponent>("My sofa", { color: "red" })
        );

        myHouse.addChild(
            myBedroom,
            myLivingroom
        );

        let names: string[] = [];
        myHouse.traverse((current: CompositeComponent<HouseComponent>) => {
            names.push([current.name, current.props?.color].join(" ").trim());
        });

        expect(names).toStrictEqual(["My bed white", "My bedroom",
            "My sofa red", "My livingroom",
            "My House"]);
    });
});