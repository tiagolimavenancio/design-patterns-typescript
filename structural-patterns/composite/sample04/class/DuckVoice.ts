import { Leaf } from './Leaf';

export class DuckVoice extends Leaf {
    operation(): void {
        console.log('Quack');
    }
}