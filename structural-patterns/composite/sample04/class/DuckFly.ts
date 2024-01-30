import { IComponent } from '../interface/IComponent';
import { Composite } from './Composite';

export class DuckFly extends Composite {
    add(component: IComponent) {
        super.add(component);
        return this;
    }

    operation() {
        console.log('It Flies');
        super.operation();
    }
}