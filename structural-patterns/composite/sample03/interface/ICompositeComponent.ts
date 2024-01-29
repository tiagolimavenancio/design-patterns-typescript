export interface ICompositeComponent<T> {
    children: ICompositeComponent<T>[];
    name: string;
    props?: T;

    addChild(...comps: ICompositeComponent<T>[]): boolean;

    traverse(fn: (ICompositeComponent) => void);
}