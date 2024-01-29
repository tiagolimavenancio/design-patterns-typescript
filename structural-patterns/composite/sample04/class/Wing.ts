import { Leaf } from "./Leaf";

export class Wing extends Leaf {
    operation(): void {
        console.log('flap-flap-flap');
    }
}